// This code defines a TypeScript interface named `Todo`.
// The `Todo` interface represents the structure of a to-do item with three properties:
// - `id`: a unique identifier for the to-do item, represented as a number.
// - `title`: the title or description of the to-do item, represented as a string.
// - `completed`: a boolean indicating whether the to-do item has been completed.

export interface Todo {
    id: string;
    title: string;
    completed: boolean;
  }