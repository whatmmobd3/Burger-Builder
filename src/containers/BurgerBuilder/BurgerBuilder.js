import React, { Component } from "react";

import Aux from "../../hoc/Aux1";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.3,
  bacon: 1,
  cheese: 0.6,
  meat: 1.3,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1,
    },
    totalPrice: 4,
  };

  addIngredientHandler = (type) => {
    const updateCount = this.state.ingredients[type] + 1;
    const updateIngredient = { ...this.state.ingredients };
    updateIngredient[type] = updateCount;

    this.setState({
      ingredients: updateIngredient,
      totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type],
    });
  };

  removeIngredientHandler = (type) => {};

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredientAdded={this.addIngredientHandler} />
      </Aux>
    );
  }
}

export default BurgerBuilder;
