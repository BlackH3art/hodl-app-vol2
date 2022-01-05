import { FETCH_COIN_DATA, FETCH_COIN_PRICES } from '../redux.actionTypes/actionTypes';

export default function coinDetailsReducer(state = [], action) {
  switch (action.type) {

    case FETCH_COIN_DATA:

      let exist = state.find(coin => coin._id === action.payload._id);

      if(exist) {
        return state;
      } else {
        return [...state, action.payload];
      }



    case FETCH_COIN_PRICES:

      for (let key in action.payload) {

        let coinData = state.find((coin) => coin.symbol === action.payload[key].symbol);

        coinData.price = action.payload[key].quote.USD.price;
        coinData.change1h = action.payload[key].quote.USD.percent_change_1h;
        coinData.change24h = action.payload[key].quote.USD.percent_change_24h;
        coinData.change7d = action.payload[key].quote.USD.percent_change_7d;
      }


      return [...state]

    default: 
      return state;

  }
}