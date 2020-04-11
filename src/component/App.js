import React from "react";
import Home from "./layout/home";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
      
      </Switch>
      <div className="App">
      </div>
    </Router>

  );
}

export default App;
