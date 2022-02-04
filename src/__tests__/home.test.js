import home, { FETCH_DATA } from '../redux/home/home';

describe('Reducer: ', () => {
  test('Test reducer initial state', () => {
    expect(home(undefined, {})).toEqual({
      data: [],
    });
  });

  test('Fetching data', () => {
    const action = {
      type: FETCH_DATA,
      payload: [{ name: 'mock' }],
    };
    expect(home({ data: [] }, action)).toEqual({
      data: [{ name: 'mock' }],
    });
  });
});
