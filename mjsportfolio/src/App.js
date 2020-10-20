import React from 'react';
import './styles/main.css';
import Navbar from './components/Navbar.js';
import { Route, Switch } from 'react-router-dom';
import Welcome from './components/Welcome.js';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Welcome} />
      </Switch>
    </div>
  );
}

export default App;
