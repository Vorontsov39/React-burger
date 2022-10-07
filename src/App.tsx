import React, { useRef } from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import data from './components/Utils/data';

import './App.css';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <BurgerIngredients data={data}/>
    </div>
  );
}

export default App;
