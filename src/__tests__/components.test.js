import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Details from '../components/Details';
import Home from '../components/Home';
import store from '../redux/configureStore';

describe('Components testing', () => {
  test('Home component', () => {
    const tree = render(<Provider store={store}><Home /></Provider>);
    expect(tree).toMatchSnapshot();
  });

  test('Details component', () => {
    const tree = render(<Provider store={store}><Details /></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
