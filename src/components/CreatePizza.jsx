import React from 'react';

import pizzaBase from '../images/PizzaBase.png';
import cheese from '../images/BaseCheese.png';
import basil from '../images/Basil.png';
import mushroom from '../images/Mushroom.png';
import olive from '../images/Olive.png';
import pineapple from '../images/Pineapple.png';
import tomato from '../images/Tomato.png';

const CreatePizza = () => {
    return (
        <main>
            <div className="image flex1">
                <div className="flex1">
                <img src={pizzaBase} alt="" />

                </div>
            </div>
            <div className="checkBox flex1">checkBox</div>
        </main>
    )
}

export default CreatePizza
