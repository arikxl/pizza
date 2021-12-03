import React from 'react';
import { motion } from 'framer-motion/dist/es/index';


import pizzaBase from '../images/PizzaBase.png';


const CreatePizza = ({ ingredients, setIngredients }) => {

    const changeIngredients = (e, ingredient) => {
        ingredient.isOn = e;
        let newIngredients = JSON.parse(JSON.stringify(ingredients));
        setIngredients(newIngredients)
    }

    return (
        <main>
            <div className="image flex1">
                <div className="pizza-container">
                    {ingredients.map((ingredient, index) => (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                y: ingredient.isOn ? 100 : -100,
                                opacity: ingredient.isOn ? 1 : 0,
                            }}
                            transition={{ duration: 1 }}
                            className="ingredients"
                        >
                            <img key={index} className="motion-ingredient"
                                src={ingredient.img} alt={ingredient.title} />
                        </motion.div>
                    ))}
                    <img src={pizzaBase} alt="pizza base" className="pizza" />

                    {/* {ingredients.map((ingredient, index) => (
                        <img className="ingredients" key={index}
                            src={ingredient.img} alt={ingredient.title} />
                    ))}
                    <img src={pizzaBase} alt="pizza base" className="pizza" /> */}

                </div>
            </div>
            <div className="checkbox-container flex1">
                {/* <input type="checkbox" name="cheese"
                onChange={(e)=> changeIngredients(e.target.name)} />
                <label htmlFor="cheese">Cheese</label> */}
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

                {/* <label className="checkBox">
                    Cheese
                    <input type="checkbox"
                        checked={ingredients["cheese"]}
                        onChange={(e) => {
                            changeIngredients(e.currentTarget.checked, "cheese")
                        }} />
                    <span className="checkMark"></span>
                </label> */}
            </div>
        </main>
    )
}

export default CreatePizza
