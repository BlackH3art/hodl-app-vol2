import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchPortfolio = () => axios.get(`${url}/portfolio`);
export const addTransaction = (newTransaction) => axios.post(`${url}/portfolio`, newTransaction);
export const editTransaction = (id, editedTransaction) => axios.patch(`${url}/portfolio/${id}`, editedTransaction);
export const deleteTransaction = (id) => axios.delete(`${url}/portfolio/${id}`);
export const sellTransaction = (id, sellingTransaction) => axios.patch(`${url}/portfolio/sell/${id}`, sellingTransaction);


export const fetchCoinData = (ticker) => axios.get(`${url}/cmcdata/${ticker}`);
export const fetchCoinPrice = (ticker) => axios.get(`${url}/cmcdata/prices/${ticker}`);


export const fetchHistoryItems= () => axios.get(`${url}/history`)