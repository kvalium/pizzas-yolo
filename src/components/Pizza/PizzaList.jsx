import React from "react";
import PropTypes from "prop-types";

import PizzaItem from "./PizzaItem";

/**
 * Presentational component for the pizza list component.
 *
 * @param {Function} onFilter callback on pizza name input filter.
 * @param {Boolean} showFilterLabel toggle for showing the filter label.
 * @param {Object[]} pizzas list to display.
 */
export default function PizzaList({ onFilter, showFilterLabel, pizzas }) {
  return (
    <>
      <div className="filter-container">
        <h1 className="title is-h1">Nos Délicieuses Pizzas</h1>
        <div className="field">
          <label className="label">Filtrer: </label>
          <div className="control">
            <input
              className="input is-primary"
              type="text"
              placeholder="nom de la pizza"
              onChange={onFilter}
            />
          </div>
        </div>
        {showFilterLabel && (
          <article className="message is-success">
            <div className="message-body">
              {`${
                pizzas.length ? pizzas.length : "Aucune"
              } pizza(s) trouvée(s)`}
            </div>
          </article>
        )}
      </div>

      <div className="columns is-multiline">
        {pizzas.map(pizza => (
          <div key={pizza.id} className="column is-4-desktop is-6-tablet">
            <PizzaItem pizza={pizza} />
          </div>
        ))}
      </div>
    </>
  );
}

PizzaList.propTypes = {
  onFilter: PropTypes.func.isRequired,
  showFilterLabel: PropTypes.bool,
  pizzas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  )
};

PizzaList.defaultProps = {
  showFilterLabel: false,
  pizzas: []
};
