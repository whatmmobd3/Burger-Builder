import React from 'react';
import burgerLogo from '../../assets/burger-logo.png'

import classes from './Logo.css'

const App = props => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
)

export default App