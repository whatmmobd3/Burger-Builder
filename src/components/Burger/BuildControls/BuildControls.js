import React from "react";

import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const App = (props) => (
  <div className={classes.BuildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map((c) => (
      <BuildControl
        key={c.label}
        label={c.label}
        added={() =>props.ingredientAdded(c.type)}
        removed={() =>props.ingredientRemoved(c.type)}
        disabled={props.disabled[c.type]}
      />
    ))}
  </div>
);

export default App;
