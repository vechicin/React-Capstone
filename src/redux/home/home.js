import axios from 'axios';

export const FETCH_DATA = 'React-Capstone/src/redux/home/FETCH_DATA';
const API_KEY = '2a09e3ba2d6d10784b25d56655b5b5ae';
const URL = `https://financialmodelingprep.com/api/v3/income-statement/AAPL?limit=120&apikey=${API_KEY}`;
const initalState = {
  data: [],
};

export const fetchData = () => (dispatch) => {
  axios.get(URL).then((response) => {
    const statements = (response.data).map((key) => {
      const year = key.calendarYear;
      const expenses = key.costAndExpenses;
      const {
        date, ebitda, incomeBeforeTax, revenue, period,
      } = key;
      const link = key.finalLink;
      const profit = key.grossProfit;
      const income = key.netIncome;
      const currency = key.reportedCurrency;
      const shares = key.weightedAverageShsOut;

      const statement = {
        year,
        expenses,
        date,
        ebitda,
        link,
        profit,
        incomeBeforeTax,
        income,
        currency,
        revenue,
        shares,
        period,
      };
      return statement;
    });

    dispatch({
      type: FETCH_DATA,
      payload: statements,
    });
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
