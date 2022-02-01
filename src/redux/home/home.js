import axios from 'axios';

const FETCH_DATA = 'React-Capstone/src/redux/home/FETCH_DATA';
const API_KEY = '2a09e3ba2d6d10784b25d56655b5b5ae';
const URL = `https://financialmodelingprep.com/api/v3/income-statement/AAPL?limit=120&apikey=${API_KEY}`;
// const companies = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'COKE', 'TSLA', 'BRK-B', 'SPOT'];
const initalState = {
  data: [],
};

export const fetchData = () => async (dispatch) => {
  const response = (await axios.get(URL)).data;
  console.log(response);

  const info = [];
  // Object.keys(response).map((object) => (
  //   info.push(object)
  // ));

  dispatch({
    type: FETCH_DATA,
    payload: info,
  });
};

const home = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default home;
