import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './Profile/index';
import Event from './Event/index';
import Home from './Home/index';
import Newuser from './Login/Newuser';
import ConfirmEmail from './Login/ConfirmEmail';
import ChangePassword from './Login/ChangePassword';
import ProfileMatch from './ProfileMatch/index';
import {useFirebaseApp} from 'reactfire';

import './index.sass';
import './App.css';

function App() {
  const firebase= useFirebaseApp();
  console.log(firebase);
  return (
    <Router>
      <Header/>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/evento/:nombre" component={Event}/>
          <Route path="/newuser">
            <Newuser />
          </Route>
          <Route path="/confirm">
            <ConfirmEmail />
          </Route>
          <Route path="/changepassword">
            <ChangePassword />
          </Route>
          <Route path="/profilematch">
            <ProfileMatch />
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
