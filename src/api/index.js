import axios from 'axios';

const url = 'http://localhost:5000/portfolio';

export const fetchPortfolio = () => axios.get(url);
export const addTransaction = (newTransaction) => axios.post(url, newTransaction);
export const editTransaction = (id, editedTransaction) => axios.patch(`${url}/${id}`, editedTransaction);
export const deleteTransaction = (id) => axios.delete(`${url}/${id}`);
export const sellTransaction = (id, sellingTransaction) => axios.patch(`${url}/sell/${id}`, sellingTransaction);


export const fetchCoinData = (ticker) => axios.get(`http://localhost:5000/cmcdata/${ticker}`);
export const fetchCoinPrice = (ticker) => axios.get(`http://localhost:5000/cmcdata/prices/${ticker}`);