import React, { Component } from "react";

import Aux from "../../hoc/Aux1";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.2,
  bacon: 1,
  cheese: 0.5,
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

  removeIngredientHandler = (type) => {
    const update = { ...this.state.ingredients };
    update[type] = this.state.ingredients[type] - 1;

    this.setState({
      ingredients: update,
      totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type],
    });
  };

  render() {
    const { ingredients, totalPrice } = this.state;
    const disaledInfo = { ...this.state.ingredients };
    for (let c in disaledInfo) {
      disaledInfo[c] = disaledInfo[c] < 1;
    }
    return (
      <Aux>
        <Burger ingredients={ingredients} />
        <BuildControls
          price={totalPrice}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disaledInfo}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
