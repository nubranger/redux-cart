import {CLEAR_CART, DECREASE, GET_TOTALS, INCREASE, REMOVE} from "./actions";

const reducer = (state, action) => {

    if (action.type === CLEAR_CART) {
        return {...state, cart: []}
    }

    if (action.type === DECREASE) {

        let tempCart = [];
        if (action.payload.amount === 1) {
            tempCart = state.cart.filter((cartItem) => cartItem.id !== action.payload.id);
        } else {
            tempCart = state.cart.map((cartItem) => {
                if (cartItem.id === action.payload.id) {
                    cartItem = {...cartItem, amount: cartItem.amount - 1}
                }
                return cartItem;
            });
        }

        return {...state, cart: tempCart};

    }

    if (action.type === INCREASE) {

        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload.id) {
                cartItem = {...cartItem, amount: cartItem.amount + 1}
            }
            return cartItem;
        });

        return {
            ...state,
            cart: tempCart
        }
    }

    if (action.type === REMOVE) {
        return {
            ...state,
            cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id)
        }
    }

    if (action.type === GET_TOTALS) {

        let tempAmount = 0;
        let tempTotal = 0;

        state.cart.map((cartItem) => {

            tempAmount += cartItem.amount;
            tempTotal += cartItem.price * cartItem.amount;

            tempTotal = parseFloat(tempTotal.toFixed(2));

            return {...state, amount: tempAmount, total: tempTotal}
        });
        return {...state, amount: tempAmount, total: tempTotal}
    }

    return state;
};

export default reducer;
