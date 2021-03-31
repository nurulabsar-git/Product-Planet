import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AdminParts from './Components/AdminParts/AdminParts';
import CheckOut from './Components/CheckOut/CheckOut';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Orders from './Components/Orders/Orders';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/admin">
          <AdminParts></AdminParts>
        </Route>
        <Route path="/product/:productId">
          <CheckOut></CheckOut>
        </Route>
        <Route path="/orders/:ordersId">
          <Orders></Orders>
        </Route>
        <Route exact path ="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
