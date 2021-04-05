import { FETCH_COIN_DATA, FETCH_COIN_PRICES } from '../redux.actionTypes/actionTypes';

export default function coinDetailsReducer(state = [], action) {
  switch (action.type) {

    case FETCH_COIN_DATA:
      return [...state, action.payload]

    case FETCH_COIN_PRICES:

      for (let key in action.payload.data) {

        let coinData = state.find((coin) => coin.symbol === action.payload.data[key].symbol);

        coinData.price = action.payload.data[key].quote.USD.price;
        coinData.change24h = action.payload.data[key].quote.USD.percent_change_24h;
      }


      return [...state]

    default: 
      return state;

  }
}