import axios from 'axios';
import { Todo } from '../types';


axios.defaults.baseURL = 'https://easyvest-dev-ed.develop.my.salesforce-sites.com/services/apexrest/api/public';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const getTodos = async (): Promise<Todo[]> => {
  const response = await axios.get('/todos');
  const data = response.data;
  return data.map((item: any) => ({
    id: item.Id,
    title: item.Title__c,
    completed: item.Completed__c,
  }));
};

export const addTodo = async (todo: Omit<Todo, 'id'>): Promise<Todo> => {
  const response = await axios.post('/todos', {
    Title__c: todo.title,
    Completed__c: todo.completed,
  });
  const item = response.data;
  return {
    id: item.Id,
    title: item.Title__c,
    completed: item.Completed__c,
  };
};

export const updateTodo = async (todo: Todo): Promise<void> => {
  await axios.patch(`/todos/${todo.id}`, {
    Title__c: todo.title,
    Completed__c: todo.completed,
  });
};

export const deleteTodo = async (id: string): Promise<void> => {
  await axios.delete(`/todos/${id}`);
};