import { Routes, Route } from "react-router-dom";


import './App.css';
import AppHeader from './components/AppHeader';
import CreatePizza from './components/CreatePizza';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path="/" element={<CreatePizza />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
