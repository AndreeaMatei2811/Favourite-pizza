import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./PizzaList.scss";

const selectUser = (reduxState) => {
  return reduxState.user;
};

const selectPizzas = (reduxState) => {
  function compatePopularity(pizzaA, pizzaB) {
    return pizzaB.bought - pizzaA.bought;
  }
  return reduxState.pizzas.sort(compatePopularity);
};

const selectNumberOfPizzas = (reduxState) => {
  return reduxState.pizzas.length;
};

export default function PizzaList() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);
  const numberOfPizzas = useSelector(selectNumberOfPizzas);

  return (
    <div className="PizzaList">
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! Your favorite pizzas:
      </p>
      <div>
        <ul className="Pizzas">
          {pizzas.map((pizza) => {
            const isFavorite = user.favorites.includes(pizza.id);
            const changeFavorite = () => {
              dispatch({
                type: "TOGGLE_FAVORITE_PIZZA",
                payload: pizza.id,
              });
            };
            return (
              <li key={pizza.id} className="Pizza">
                <p>Pizza type: {pizza.name}</p>
                <button onClick={changeFavorite}>
                  {isFavorite ? "💖" : "💙"}
                </button>
                <p>Description: {pizza.description}</p>
                <p>It was bought {pizza.bought} times</p>
              </li>
            );
          })}
        </ul>
      </div>
      <p>Total number of known pizzas: {numberOfPizzas}</p>
    </div>
  );
}
