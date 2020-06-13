import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './Profile/index';
import Event from './Event/index';
import Home from './Home/index';
import './index.sass';
import './App.css';

function App() {
  return (
    <Router>
      <Header/>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/event">
            <Event />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      <Footer/>
      
    </Router>

   
  );
}

export default App;
