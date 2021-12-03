import React from 'react';
import { motion } from 'framer-motion/dist/es/index';
import { useNavigate } from 'react-router-dom';

import pizzaBase from '../images/PizzaBase.png';

const CreatePizza = ({ ingredients, setIngredients }) => {

    const navigate = useNavigate();

    const changeIngredients = (e, ingredient) => {
        ingredient.isOn = e;
        let newIngredients = JSON.parse(JSON.stringify(ingredients));
        setIngredients(newIngredients);
    };

    return (
        <main>
            <div className="image flex1">
                <div className="pizza-container">
                    {ingredients.map((ingredient, index) => (
                        <motion.div key={index}
                            initial={ingredient.title === 'Cheese'
                                ? { scale: 0 }
                                : { opacity: 0 }}
                            animate={
                                ingredient.title !== 'Cheese' ?
                                    {
                                        y: ingredient.isOn ? 100 : -100,
                                        opacity: ingredient.isOn ? 1 : 0
                                    } :
                                    {
                                        scale: ingredient.isOn ? 1 : 0,
                                        y: ingredient.isOn ? 100 : -100
                                    }
                            }
                            transition={{ duration: 1 }}
                            className="ingredients">
                            <img key={index} className="motion-ingredient"
                                src={ingredient.img} alt={ingredient.title} />
                        </motion.div>
                    ))}
                    <img src={pizzaBase} alt="pizza base" className="pizza" />
                </div>
            </div>
            <div className="checkbox-container flex1">
                {ingredients.map((ingredient, index) => (
                    <label className="checkbox" key={index}>
                        {ingredient.title}
                        <input type="checkbox"
                            checked={ingredients[ingredient]}
                            onChange={(e) => {
                                changeIngredients(e.currentTarget.checked, ingredient)
                            }} />
                        <span className="check-mark"></span>
                    </label>
                ))}
                <button
                onClick ={() => navigate('checkout')}
                >Order Pizza!</button>
            </div>
        </main >
    );
};

export default CreatePizza;
