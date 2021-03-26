import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import { auth } from './firebase';
import HomeScreen from './screens/HomeScreen/index'
import LoginScreen from './screens/Login/index';

function App() {
  const user = null

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        
      } else {

      }
    })

    return unsubscribe
  }, [])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ): (
          <Switch>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>    
        )}
      </Router>
    </div>
  );
}

export default App;
