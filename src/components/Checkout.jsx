import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import pizzaMan from '../images/PizzaMan.png'

const Checkout = ({ ingredients }) => {

    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();


    return (
        <div className="checkout-container">
            <div className="order-info">
                <h1>My ingredients</h1>
                {ingredients.map((ingredient, index) => {
                    return (
                        ingredient.isOn && (
                            <p key={index}>{ingredient.title}</p>
                        ))
                })}
                <button
                    onClick={() => setSuccess(true)}
                >Confirm</button>
                <button onClick={() => navigate('/')}>Go Back</button>
            </div>

            <div className="checkout-msg flex1">
                {success && (
                    <div >
                        <img src={pizzaMan} alt="pizza-man" />
                        <h1>Your pizza is in the stove</h1>
                        <p>Order #{Math.round(Math.random() * 10000)}</p>
                        <p style={{ fontSize: 20 }}>
                            Will be ready in 20-30 min.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Checkout
