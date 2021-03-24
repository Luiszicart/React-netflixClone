import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import HomeScreen from './screens/HomeScreen/index'
import LoginScreen from './screens/Login/index';

function App() {
  const user = null

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
