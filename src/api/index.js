import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000'});

API.interceptors.request.use((req) => {
  const user = localStorage.getItem("profile");

  if(user) {
    let parsedUser = JSON.parse(user);
    req.headers.authorization = `Bearer ${parsedUser.token}`;
  };

  return req;
});

export const fetchPortfolio = () => API.get(`/portfolio`);
export const fetchPortfolioAverage = () => API.get(`/portfolio/average`);
export const addTransaction = (newTransaction) => API.post(`/portfolio`, newTransaction);
export const editTransaction = (id, editedTransaction) => API.patch(`/portfolio/${id}`, editedTransaction);
export const deleteTransaction = (id) => API.delete(`/portfolio/${id}`);
export const sellTransaction = (id, sellingTransaction) => API.patch(`/portfolio/sell/${id}`, sellingTransaction);


export const fetchCoinData = (ticker) => API.get(`/cmcdata/${ticker}`);
export const fetchCoinPrice = (ticker) => API.get(`/cmcdata/prices/${ticker}`);
export const isThereSuchCoin = (ticker) => API.get(`/cmcdata/check/${ticker}`);


export const fetchHistoryItems = () => API.get(`/history`);
export const fetchHistoryItemsDetails = (tickers) => API.get(`/history/coins-datails/${tickers}`);


export const fetchBalanceInfo = () => API.get(`/balance/info`);


export const signIn = (formdata) => API.post('/user/sign-in', formdata);
export const signUp = (formdata) => API.post('/user/sign-up', formdata);