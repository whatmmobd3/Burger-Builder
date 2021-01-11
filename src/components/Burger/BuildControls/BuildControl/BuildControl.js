import React from "react";

import classes from "./BuildControl.css";

const App = (props) => (
  <div className={classes.BuildControl}>
    <div>{props.label}</div>
    <button className={classes.Less} onClick={props.removed}>Less</button>
    <button className={classes.More} onClick={props.added}>More</button>
  </div>
);

export default App;
