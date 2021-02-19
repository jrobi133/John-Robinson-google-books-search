// import React from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Search from './pages/Search';
// import Saved from './pages/Saved';

// function App() {
//   return (
//     <>
//     <Router>
//       <Navbar />
//       {/* <Switch>
//       <Route exact path="/" component={Search} />
//       <Route exact path="/search" component={Search} />
//       <Route exact path="/saved" component={Saved} />
//       </Switch> */}
//       <Switch>
//           <Route path="/search">
//             <Search />
//           </Route>
//           <Route path="/saved">
//             <Saved />
//           </Route>
//           <Route path="/">
//             <Search />
//           </Route>
//         </Switch>
      
//     </Router>
//     </>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";

import Search from "./pages/Search";
import Saved from "./pages/Saved";

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Jumbotron />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/saved">
            <Saved />
          </Route>
          <Route path="/">
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
