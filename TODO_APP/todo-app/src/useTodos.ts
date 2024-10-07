import { useState, useEffect } from 'react';
import { Todo } from './types';
import { getTodos, addTodo, updateTodo, deleteTodo } from './services/salesforce';

// State and logic for managing todos

export const useTodos = () => {
  //State Management
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch todos on initial render
  useEffect(() => {
    fetchTodos();
  }, []);

  // Function to fetch todos from the API
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const data = await getTodos();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to add a new todo
  const handleAddTodo = async () => {
    if (title.trim() === '') return;
    try {
      const newTodo = await addTodo({ title, completed: false });
      setTodos([...todos, newTodo]);
      setTitle('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  // Function to toggle the completion status of a todo
  const handleToggleTodo = async (id: string) => {
    try {
      const todo = todos.find((todo) => todo.id === id);
      if (todo) {
        const updatedTodo = { ...todo, completed: !todo.completed };
        await updateTodo(updatedTodo);
        setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
      }
    } catch (error) {
      console.error('Error toggling todo:', error);
    }
  };

  // Function to delete a todo
  const handleDeleteTodo = async (id: string) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return {
    todos,
    title,
    loading,
    setTitle,
    handleAddTodo,
    handleToggleTodo,
    handleDeleteTodo,
  };
};