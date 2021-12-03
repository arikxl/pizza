import React from 'react';
import { useNavigate } from 'react-router-dom';

import PizzaLogo from '../images/pizzalogo.png';

const AppHeader = () => {

    const navigate = useNavigate();

    return (
        <header onClick={() =>navigate('')}>
            <img src={PizzaLogo} alt="PizzaLogo" className="logo"/>
            <h1 className="headline">Make Your Pizza</h1>
        </header>
    );
};

export default AppHeader;
