import React, { Component } from "react";
import Aux from "../../hoc/Aux1";

import Burger from '../../components/Burger/Burger'

class App extends Component {
  render() {
    return (
      <Aux>
        <Burger />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default App;

// why not show burger