import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import './App.css';
import Checkout from './components/Checkout';
import AppHeader from './components/AppHeader';
import CreatePizza from './components/CreatePizza';
import cheese from './images/BaseCheese.png';
import basil from './images/Basil.png';
import mushroom from './images/Mushroom.png';
import olive from './images/Olive.png';
import pineapple from './images/Pineapple.png';
import tomato from './images/Tomato.png';

function App() {

  const [ingredients, setIngredients] = useState([
    {
      img: cheese,
      title: "Cheese",
      isOn: false,
    },
    {
        img: mushroom,
        title: "Mushroom",
        isOn: false
    },
    {
        img: olive,
        title: "Olive",
        isOn: false
    },
    {
        img: pineapple,
        title: "Pineapple",
        isOn: false
    },
    {
        img: tomato,
        title: "Tomato",
        isOn: false
    },
    {
      img: basil,
      title: "Basil",
      isOn: false
    },
  ]);

  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path="/" element={<CreatePizza
          ingredients={ingredients}
          setIngredients={setIngredients}/>} />
        <Route path="/checkout" element={<Checkout ingredients={ingredients}/>} />
      </Routes>
    </div>
  );
}

export default App;
