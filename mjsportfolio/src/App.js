import React from 'react';
import './styles/main.css';
import Navbar from './components/Navbar.js';
import { Route, Switch, Router } from 'react-router-dom';
import Welcome from './components/Welcome.js';
import IconBar from './components/IconBar.js';
import Education from './components/Education.js';

function App() {
  return (
    <div className='App'>
      <Navbar sticky='top' />
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/education' component={Education} />
      </Switch>
    </div>
  );
}

export default App;
