import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import data from '../Utils/data';

import './App.css';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <BurgerIngredients data={data}/>
    </div>
  );
}

export default App;
