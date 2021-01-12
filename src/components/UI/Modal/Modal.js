/* eslint-disable no-unused-expressions */
import React from "react";
import classes from "./Modal.css";

const App = (props) => {
  return <div className={classes.Modal}>{props.children}</div>;
};

export default App;
