// src/App.tsx
import React, { useState, useEffect } from 'react';
import { Todo } from './types';
import { getTodos, addTodo, updateTodo, deleteTodo } from './services/salesforce';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const data = await getTodos();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
      // Handle error appropriately
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = async () => {
    if (title.trim() === '') return;
    try {
      const newTodo = await addTodo({ title, completed: false });
      setTodos([...todos, newTodo]);
      setTitle('');
    } catch (error) {
      console.error('Error adding todo:', error);
      // Handle error appropriately
    }
  };

  const handleUpdateTodo = async (id: string, updatedTitle: string) => {
    try {
      const todoToUpdate = todos.find((todo) => todo.id === id);
      if (todoToUpdate) {
        const updatedTodo = { ...todoToUpdate, title: updatedTitle };
        await updateTodo(updatedTodo);
        setTodos(
          todos.map((todo) => (todo.id === id ? updatedTodo : todo))
        );
      }
    } catch (error) {
      console.error('Error updating todo:', error);
      // Handle error appropriately
    }
  };

  const handleToggleCompleted = async (id: string) => {
    try {
      const todoToUpdate = todos.find((todo) => todo.id === id);
      if (todoToUpdate) {
        const updatedTodo = { ...todoToUpdate, completed: !todoToUpdate.completed };
        await updateTodo(updatedTodo);
        setTodos(
          todos.map((todo) => (todo.id === id ? updatedTodo : todo))
        );
      }
    } catch (error) {
      console.error('Error toggling todo:', error);
      // Handle error appropriately
    }
  };

  const handleDeleteTodo = async (id: string) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
      // Handle error appropriately
    }
  };

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
          <div>Loading...</div>
        ) : (
          <ul>
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between mb-2 p-2 border-b"
              >
                <div className="flex items-center flex-grow">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleCompleted(todo.id)}
                    className="mr-2"
                  />
                  <input
                    type="text"
                    value={todo.title}
                    onChange={(e) => handleUpdateTodo(todo.id, e.target.value)}
                    className={`w-full border-b focus:outline-none ${
                      todo.completed ? 'line-through text-gray-500' : ''
                    }`}
                  />
                </div>
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="text-red-500"
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
}

export default App;