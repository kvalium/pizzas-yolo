import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { addProductToCart } from "../Cart/store/actions";

/**
 * Display a pizza
 *
 * @param {Object} pizza displayed pizza
 * @param {Function} addToCart add to cart button click action
 */
export function PizzaItem({ pizza, addToCart }) {
  return (
    <div className="pizza-link">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <div className="columns">
                <div className="column is-9">
                  <p className="title is-4">{pizza.name}</p>
                </div>
                <div className="column is-3">
                  <p className="title is-4 has-text-primary">{`${
                    pizza.price
                  } €`}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content">{pizza.desc}</div>
          <button
            type="button"
            className="button is-primary is-small is-rounded"
            onClick={() => addToCart(pizza)}
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}

PizzaItem.propTypes = {
  pizza: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired
  }).isRequired,
  addToCart: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  addToCart: pizza => dispatch(addProductToCart(pizza))
});

export default connect(
  undefined,
  mapDispatchToProps
)(PizzaItem);
