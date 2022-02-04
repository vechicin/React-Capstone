import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import Home from "../components/Home"
import store, { persistor } from "../redux/configureStore"

describe('Components testing', () => {
  test('Home component', () => {
    const tree = render(<Provider store={store}><PersistGate persistor={persistor}><Home /></PersistGate></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
