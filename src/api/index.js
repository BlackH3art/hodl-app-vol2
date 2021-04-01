import axios from 'axios';

const url = 'http://localhost:5000/portfolio';

export const fetchPortfolio = () => axios.get(url);
export const addTransaction = (newTransaction) => axios.post(url, newTransaction);
export const editTransaction = (id, editedTransaction) => axios.patch(`${url}/${id}`, editedTransaction);
export const deleteTransaction = (id) => axios.delete(`${url}/${id}`);