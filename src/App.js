import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AdminParts from './Components/AdminParts/AdminParts';
import Header from './Components/Header/Header';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/admin">
          <AdminParts></AdminParts>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
