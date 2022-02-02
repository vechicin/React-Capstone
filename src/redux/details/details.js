import axios from 'axios';

const FETCH_DETAILS_DATA = 'React-Capstone/src/redux/home/FETCH_DETAILS_DATA';
const API_KEY = '77df038e719b3f3653b2467abd2e7baf';
const URL = `https://financialmodelingprep.com/api/v3/income-statement/AAPL?limit=120&apikey=${API_KEY}`;
const initialState = {
  statements: [],
};

export const fetchStatements = () => async (dispatch) => {
  const response = (await axios.get(URL)).data;
  const statements = [];
  Object.entries(response).map((item) => {
    const fetchedStatements = {
      date: item[1].date,
      currency: item[1].reportedCurrency,
      costExpenses: item[1].costAndExpenses,
      costRevenue: item[1].costOfRevenue,
      depreciation: item[1].depreciationAndAmortization,
      ebitda: item[1].ebitda,
      link: item[1].finalLink,
      profit: item[1].grossProfit,
      incomeTax: item[1].incomeBeforeTax,
      incomeExpense: item[1].incomeTaxExpense,
      interestExpense: item[1].interestExpense,
      interestIncome: item[1].interestIncome,
      netIncome: item[1].netIncome,
      operatingExpenses: item[1].operatingExpenses,
      operatingIncome: item[1].operatingIncome,
      research: item[1].researchAndDevelopmentExpenses,
      revenue: item[1].revenue,
      shares: item[1].weightedAverageShsOut,
      sharesDil: item[1].weightedAverageShsOutDil,
    };
    statements.push(fetchedStatements);
    return statements;
  });

  dispatch({
    type: FETCH_DETAILS_DATA,
    payload: statements,
  });
};

const details = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAILS_DATA:
      return {
        ...state,
        statements: action.payload,
      };

    default:
      return state;
  }
};

export default details;
