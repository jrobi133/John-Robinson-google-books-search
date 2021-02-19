import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './pages/Search';
import Saved from './pages/Saved';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      {/* <Switch>
      <Route exact path="/" component={Search} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/saved" component={Saved} />
      </Switch> */}
      
    </Router>
    </>
  );
}

export default App;
