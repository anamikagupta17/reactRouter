import React from "react";
import { Route,BrowserRouter as Router } from 'react-router-dom'


import App from './App';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const routing = (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  )

  export default routing;

