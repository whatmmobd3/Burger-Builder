import React, { Component } from "react";

import Aux from "../../hoc/Aux1";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"

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
    purchase: false,
    purchasing: false
  };

  updatePurchase = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((e) => {
        return ingredients[e];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchase: sum > 0 });
  };

  addIngredientHandler = (type) => {
    const updateCount = this.state.ingredients[type] + 1;
    const updateIngredient = { ...this.state.ingredients };
    updateIngredient[type] = updateCount;

    this.setState({
      ingredients: updateIngredient,
      totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type],
    });

    this.updatePurchase(updateIngredient)
  };

  removeIngredientHandler = (type) => {
    const update = { ...this.state.ingredients };
    update[type] = this.state.ingredients[type] - 1;

    this.setState({
      ingredients: update,
      totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type],
    });

    this.updatePurchase(update)
  };

  purchaseHandler = () => {
    this.setState({purchasing:true})
  }

  render() {
    const { ingredients,purchase, totalPrice,purchasing } = this.state;
    const disaledInfo = { ...this.state.ingredients };
    for (let c in disaledInfo) {
      disaledInfo[c] = disaledInfo[c] < 1;
    }
    return (
      <Aux>
        <Modal show={purchasing}>
          <OrderSummary ingredients={ingredients} />
        </Modal>
        <Burger ingredients={ingredients} />
        <BuildControls
          price={totalPrice}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disaledInfo}
          ordered={this.purchaseHandler}
          purchasable={purchase}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
