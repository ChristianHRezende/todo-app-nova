import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://todo-api-nova.herokuapp.com/',
    timeout: 3000,
  });

export const getTodos = () => {console.log(instance); return instance.get('/todos')}
export const postTodo = (todo) => instance.post('/todos',todo)
export const putTodo = (todoUpdated) => instance.post('/todos/'+todoUpdated.id,todoUpdated)