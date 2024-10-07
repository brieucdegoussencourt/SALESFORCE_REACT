//The main goal of salesforce.ts is to provide a set of functions to
//interact with a Salesforce API for managing "todo" items.
//It uses the axios library to make HTTP requests to the Salesforce API.

import axios from 'axios';
import { Todo } from '../types';


// Setting default base URL & headers for axios (http requests via API)
axios.defaults.baseURL = 'https://easyvest-dev-ed.develop.my.salesforce-sites.com/services/apexrest/api/public';
axios.defaults.headers.common['Content-Type'] = 'application/json';

// Function to get all todos
export const getTodos = async (): Promise<Todo[]> => {
  const response = await axios.get('/todos'); // Making a GET request to fetch todos
  const data = response.data; // Extracting data from the response
  return data.map((item: any) => ({ // Mapping the response data to Todo type
    id: item.Id,
    title: item.Title__c,
    completed: item.Completed__c,
  }));
};

// Function to add a new todo
export const addTodo = async (todo: Omit<Todo, 'id'>): Promise<Todo> => {
  const response = await axios.post('/todos', { // Making a POST request to add a new todo
    Title__c: todo.title,
    Completed__c: todo.completed,
  });
  const item = response.data; // Extracting data from the response
  return { // Returning the new todo with the id from the response
    id: item.Id,
    title: item.Title__c,
    completed: item.Completed__c,
  };
};

// Function to update an existing todo
export const updateTodo = async (todo: Todo): Promise<void> => {
  await axios.patch(`/todos/${todo.id}`, { // Making a PATCH request to update the todo
    Title__c: todo.title,
    Completed__c: todo.completed,
  });
};

// Function to delete an existing todo
export const deleteTodo = async (id: string): Promise<void> => {
  await axios.delete(`/todos/${id}`); // Making a DELETE request to remove the todo by its id
};