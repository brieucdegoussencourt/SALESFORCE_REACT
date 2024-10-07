import React from 'react';
import { useTodos } from './useTodos';

//Function to display the TodoApp
const TodoApp = () => {
  //State variables and functions from useTodos.
  const {
    todos,
    title,
    loading,
    setTitle,
    handleAddTodo,
    handleToggleTodo,
    handleDeleteTodo,
  } = useTodos();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white shadow-md rounded p-6">
        <h1 className="text-2xl font-bold mb-4">To-Do App</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-grow border rounded p-2"
            placeholder="Add a new to-do"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            onClick={handleAddTodo}
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {todos.map((todo) => (
              <li key={todo.id} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                />
                <span className={`flex-grow ml-2 ${todo.completed ? 'line-through' : ''}`}>
                  {todo.title}
                </span>
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoApp;