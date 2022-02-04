import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { Router } from "react-router"
import { PersistGate } from "redux-persist/integration/react"
import Details from "../components/Details"
import Home from "../components/Home"
import Navbar from "../components/Navbar"
import Statements from "../components/Statements"
import store, { persistor } from "../redux/configureStore"

describe('Components testing', () => {
  test('Home component', () => {
    const tree = render(<Provider store={store}><Home /></Provider>);
    expect(tree).toMatchSnapshot();
  });

  test('Details component', () => {
    const tree = render(<Provider store={store}><Details /></Provider>);
    expect(tree).toMatchSnapshot();
  });

  test('Statements component', () => {
    const tree = render(<Provider store={store}><Statements /></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
