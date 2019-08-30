import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Pizza-Yolo.png";

/**
 * TopBar Component using React useState hook
 * @see file TopBarOldSchool.jsx to see the classic state management
 */
export function TopBar() {

  // define a value for isMenuOpen and declare the update func
  const [isMenuOpen, displayMenu ] = useState(false);

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
          onClick={() => displayMenu(!isMenuOpen)}
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

export default TopBar;