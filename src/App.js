import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import data from "./cart-items";

// redux stuff
import {createStore} from "redux";
import reducer from "./reducer";
// Provider - wraps app
import {Provider} from "react-redux"

// initial store
const initialStore = {
    cart: data,
    total: 0,
    amount: 0
};

// store
const store = createStore(
    reducer,
    initialStore,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
    // cart setup
    return (
        <Provider store={store}>
            <Navbar/>
            <CartContainer/>
        </Provider>
    );
}

export default App;
