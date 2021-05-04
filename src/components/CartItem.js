import React from "react";
import {connect} from "react-redux";
import {INCREASE, DECREASE, REMOVE} from "../actions";

const CartItem = ({increase, decrease, remove, img, title, price, amount}) => {

    return (
        <div className="cart-item">
            <img src={img} alt={title}/>
            <div>
                <h4>{title}</h4>
                <h5 className="item-price">${price}</h5>
                {/* remove button */}
                <button
                    onClick={() => remove()}
                    className="remove-btn"
                >
                    remove
                </button>
            </div>
            <div>
                {/* increase amount */}
                <button onClick={() => increase()} className="amount-btn" aria-label="UP">
                    <i className="bi bi-caret-up-fill"/>
                </button>
                {/* amount */}
                <p className="amount">{amount}</p>
                {/* decrease amount */}
                <button onClick={() => decrease()} className="amount-btn" aria-label="DOWN">
                    <i className="bi bi-caret-down-fill"/>
                </button>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {id, amount} = ownProps;

    return {
        remove: () => dispatch({type: REMOVE, payload: {id}}),
        increase: () => dispatch({type: INCREASE, payload: {id, amount}}),
        decrease: () => dispatch({type: DECREASE, payload: {id, amount}}),
    };
};

export default connect(null, mapDispatchToProps)(CartItem);
