import axios from 'axios';

const FETCH_HOME_DATA = 'React-Capstone/src/redux/home/FETCH_HOME_DATA';
// const API_KEY = '2a09e3ba2d6d10784b25d56655b5b5ae';
// const API_KEY = 'ddd657ad54ceb10b1486a984f1eb30ac';
const API_KEY = '77df038e719b3f3653b2467abd2e7baf';
const URL = `https://financialmodelingprep.com/api/v3/income-statement/AAPL?limit=120&apikey=${API_KEY}`;
// const companies = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'COKE', 'TSLA', 'BRK-B', 'SPOT'];
const initalState = {
  data: [],
};

export const fetchData = () => async (dispatch) => {
  const response = (await axios.get(URL)).data;

  const info = [];
  Object.entries(response).map((item) => {
    const fetchedInfo = {
      year: item[1].calendarYear,
      id: item[1].date,
    };
    info.push(fetchedInfo);
    return info;
  });

  dispatch({
    type: FETCH_HOME_DATA,
    payload: info,
  });
};

const home = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_HOME_DATA:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default home;
