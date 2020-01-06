import axios from '../config/Axios';

export const listar = () => axios.get('/tarefas');

export const cadastrar = object => axios.post('/tarefas', object);
