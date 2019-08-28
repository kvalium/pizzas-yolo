import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { flushCart } from "./store/actions";

export function Cart({ cart, flushCart }) {
  return (
    <>
      <h2 className="title is-h2">Mon Panier</h2>
      <ul>
        {cart.map((item, id) => (
          <li key={id}>{item.name}</li>
        ))}
      </ul>
      <hr />
      <p>
        <b>{`Total: ${cart.reduce((acc, item) => acc + item.price, 0)} €`}</b>
      </p>
      <br />
      <button className="button is-warning" onClick={() => flushCart()}>
        Vider le panier
      </button>
    </>
  );
}

const mapStateToProps = state => ({
  cart: state.cartReducer.cart
});

const mapDispatchToProps = dispatch => ({
  flushCart: () => dispatch(flushCart())
});

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  ),
  flushCart: PropTypes.func.isRequired
};

Cart.defaultProps = {
  cart: []
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
