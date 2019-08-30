import React from "react";

export function PizzaLoading() {
  return (
    <>
      <h1 className="title is-h1 has-text-centered is-italic ">
        Chargement des pizzas...
      </h1>
      <progress className="progress is-large is-primary" max="100">
        60%
      </progress>
    </>
  );
}

export default PizzaLoading;
