import Todo from "../models/Todo";

// export function fetchTodos(): Promise<Array<Todo>> {
//   return fetch('http://localhost:3000/api/todos')
//     .then(response => response.json())
// }

export async function fetchTodos(): Promise<Array<Todo>> {
  const response = await fetch('http://localhost:3000/api/todos');
  return response.json();
}