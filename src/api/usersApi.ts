import axios from "axios";

axios.defaults.baseURL = 'https://64c8abb1a1fe0128fbd6090c.mockapi.io/';

export const getItems = () => axios.get('/users');