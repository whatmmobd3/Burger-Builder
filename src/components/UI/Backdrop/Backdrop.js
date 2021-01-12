/* eslint-disable no-unused-expressions */
import React from "react";
import classes from './Backdrop.css'

const App = (props) => {
  return props.show ? <div
  className={classes.Backdrop}
  onClick={props.clicked}
  ></div> : null;
};

export default App;
