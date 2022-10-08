import React from 'react';
import AppHeader from '../AppHeader/AppHeader';

import './App.css';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <BurgerIngredients />
    </div>
  );
}

export default App;
