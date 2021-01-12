import React from "react";

import Aux from "../../../hoc/Aux1";
import Button from '../../UI/Button/Button'

const App = (props) => {
  const element = Object.keys(props.ingredients).map((e) => {
    return (
      <li>
        <span style={{ textTransform: "capitalize" }}>
          {e}: {props.ingredients[e]}
        </span>
      </li>
    );
  });
  return (
    <Aux>
      <h3>Order</h3>
      <p>Following ingredients: </p>
      <ul>{element}</ul>
      <p>Continue to Checkout?</p>
      <Button  btnType="Danger" clicked={props.pruchaseCanceled}>CANCEL</Button>
      <Button  btnType="Success" clicked={props.pruchaseContinued}>CONTINUE</Button>
    </Aux>
  );
};

export default App;
