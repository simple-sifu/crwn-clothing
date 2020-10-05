import React from 'react';
import { Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import './App.css';
import ShopPage from './pages/ShopPage';

const App = () => {
  return (
    <div>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />


    </div>

  )

}


export default App;
