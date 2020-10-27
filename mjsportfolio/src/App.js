import React from 'react';
import './styles/main.css';
import './index.css';
import Navbar from './components/Navbar.js';
import { Route, Switch } from 'react-router-dom';
import Welcome from './components/Welcome.js';
// import Education from './components/Education.js';
import Education2 from './components/Education2.js';
import Projects from './components/Projects.js';
import About from './components/About.js';
import Experience from './components/experience/Experience.js';
import Blog from './components/Blog.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className='App'>
      <Navbar sticky='top' />
      <div id='body'>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/education' component={Education2} />
          <Route path='/projects' component={Projects} />
          <Route path='/experience' component={Experience} />
          <Route path='/blog' component={Blog} />
          <Route path='/about' component={About} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
