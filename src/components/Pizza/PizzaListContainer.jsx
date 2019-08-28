import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { appendPizzaList } from "./store/actions";

import fetchPizzas from "./services/fetchPizzas";
import PizzaLoading from "./PizzaLoading";
import PizzaList from "./PizzaList";

/**
 * Container for the Pizza List component
 */
class PizzaListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredPizzas: [],
      loading: true,
      showFilterLabel: false
    };
  }

  componentDidMount() {
    // retrieve pizzas from the store if possible
    if (this.props.pizzas.length > 0) {
      this.setState({
        filteredPizzas: this.props.pizzas,
        loading: false
      });
      return;
    }
    // fetch pizzas from backend
    fetchPizzas().then(pizzas => {
      this.props.appendPizzaList(pizzas);
      this.setState({
        filteredPizzas: pizzas,
        loading: false
      });
    });
  }

  /**
   * Prevent the component to be re-rendered if list does not change.
   *
   * @param {*} _nextProps unused
   * @param {*} nextState future state
   */
  shouldComponentUpdate(_nextProps, nextState) {
    return (
      JSON.stringify(this.state.filteredPizzas) !==
      JSON.stringify(nextState.filteredPizzas)
    );
  }

  /**
   * Callback on pizza name filter. Set the pizza list according
   * current filter.
   *
   * @param {Event} e input field event
   */
  onFilter = e => {
    const { pizzas } = this.props;
    const filter = e.target.value.toLowerCase();
    const filteredPizzas = pizzas.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
    const showFilterLabel = pizzas.length !== filteredPizzas.length;
    this.setState({ filteredPizzas, showFilterLabel });
  };

  render() {
    const { loading, showFilterLabel, filteredPizzas } = this.state;
    if (loading) {
      return <PizzaLoading />;
    }
    return (
      <PizzaList
        onFilter={this.onFilter}
        showFilterLabel={showFilterLabel}
        pizzas={filteredPizzas}
      />
    );
  }
}

const mapStateToProps = state => ({
  pizzas: state.pizzaReducer.pizzas
});

const mapDispatchToProps = dispatch => ({
  appendPizzaList: pizzas => dispatch(appendPizzaList(pizzas))
});

PizzaListContainer.propTypes = {
  pizzas: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ),
  appendPizzaList: PropTypes.func.isRequired
};

PizzaListContainer.defaultProps = {
  pizzas: []
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PizzaListContainer);
