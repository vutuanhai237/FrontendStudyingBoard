import React from "react";
import Home from "./layout/home";
import Admin from "./admin/Admin.js"
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
        <Route exact path="/admin">
          <Admin/>
        </Route>
      </Switch>
      <div className="App">
      </div>
    </Router>

  );
}

export default App;
