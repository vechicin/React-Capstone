import axios from 'axios';

const FETCH_DATA = 'React-Capstone/src/redux/home/FETCH_DATA';
const API_KEY = '77df038e719b3f3653b2467abd2e7baf';
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
        date, ebitda, incomeBeforeTax, revenue,
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
