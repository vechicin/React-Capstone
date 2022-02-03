import axios from 'axios';

const FETCH_DATA = 'React-Capstone/src/redux/home/FETCH_DATA';
const API_KEY = '77df038e719b3f3653b2467abd2e7baf';
const URL = `https://financialmodelingprep.com/api/v3/income-statement/AAPL?limit=120&apikey=${API_KEY}`;
const initalState = {
  data: [],
};

export const fetchData = () => async (dispatch) => {
  const response = (await axios.get(URL)).data;
  const statements = [];
  response.forEach((item) => {
    const fetchedStatements = {
      year: item.calendarYear,
      date: item.date,
      currency: item.reportedCurrency,
      costExpenses: item.costAndExpenses,
      ebitda: item.ebitda,
      link: item.finalLink,
      profit: item.grossProfit,
      incomeTax: item.incomeTaxExpense,
      netIncome: item.netIncome,
      revenue: item.revenue,
      shares: item.weightedAverageShsOut,
    };
    statements.push(fetchedStatements);
    return statements;
  });

  dispatch({
    type: FETCH_DATA,
    payload: statements,
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
