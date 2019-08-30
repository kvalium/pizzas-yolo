import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Pizza-Yolo.png";

export default class TopBarOldSchool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  /**
   * On mobile: toggle the menu
   */
  onMenuBtnClick = () => {
    this.setState(state => ({
      isMenuOpen: !state.isMenuOpen
    }));
  };

  render() {
    const { isMenuOpen } = this.state;
    return (
      <nav className="is-primary navbar">
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-item">
            <img src={logo} alt="PizzaYolo logo" />
          </NavLink>
          <button
            className={`navbar-burger${isMenuOpen ? " is-active" : ""}`}
            data-target="navMenu"
            aria-label="menu"
            aria-expanded="false"
            onClick={this.onMenuBtnClick}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

        <div
          id="navMenu"
          className={`navbar-menu${isMenuOpen ? " is-active" : ""}`}
        >
          <div className="navbar-start">
            <NavLink
              to="/"
              exact
              className="navbar-item"
              activeClassName="selected"
            >
              Accueil
            </NavLink>
            <NavLink
              to="/pizzas"
              className="navbar-item"
              activeClassName="selected"
            >
              Nos Pizzas
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}
