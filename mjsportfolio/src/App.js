import React from 'react';
import './styles/main.css';
import Navbar from './components/Navbar.js';
import { Route, Switch } from 'react-router-dom';
import Welcome from './components/Welcome.js';
import Education from './components/Education.js';
import IconBar from './components/IconBar.js';

function App() {
  return (
    <div className='App'>
      <Navbar sticky='top' />
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/education' component={Education} />
      </Switch>
      <IconBar fixed='bottom' />
    </div>
  );
}

export default App;
