import { BrowserRouter as Router, NavLink, Redirect, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import HomePage from './pages/homepage';
import Login from './pages/Authentication/login';
import {firebase} from './firebase';
import { getAuth } from "firebase/auth";

// layouts
import Front from './layouts/front';

function App() {

  const [isUserSignedIn, setisUserSignedIn] = useState(true);

  const auth = getAuth();

  auth.onAuthStateChanged(user => {
    if (user) {
      console.log("User has signed in! (app.js)");
      return setisUserSignedIn(true);
    } else {
      setisUserSignedIn(false);
    }
  });

  return (
    <Router>
    <Switch>
      <Route path='/' exact>{isUserSignedIn ? <Front><HomePage /></Front> : <Redirect to="/login" />}</Route>
      <Route path='/login'>{isUserSignedIn ? <Redirect to="/" /> : <Front><Login /></Front>}</Route>
    </Switch>
    </Router>
  );
}

export default App;
