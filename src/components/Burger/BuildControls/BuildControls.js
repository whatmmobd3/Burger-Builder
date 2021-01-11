import React from "react";

import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.css";

const controls = [
  { label: "Salad", type: "s" },
  { label: "Bacon", type: "b" },
  { label: "Cheese", type: "c" },
  { label: "Meat", type: "m" },
];

const App = (props) => (
  <div className={classes.BuildControls}>
    {controls.map((c) => (
      <BuildControl key={c.label} label={c.label} />
    ))}
  </div>
);

export default App;
