import axios from 'axios';

const url = 'http://localhost:5000/portfolio';

export const fetchPortfolio = () => axios.get(url);
export const addTransaction = (newTransaction) => axios.post(url, newTransaction)