import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from './Components/Admin/Admin';
import AdminParts from './Components/AdminParts/AdminParts';
import CheckOut from './Components/CheckOut/CheckOut';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ManageProduct from './Components/ManageProduct/ManageProduct';
import Orders from './Components/Orders/Orders';

export const myContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <myContext.Provider value = {[loggedInUser, setLoggedInUser]}> 
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/admin">
         <Admin></Admin>
        </Route>
        <Route path="/manageProducts">
          <ManageProduct></ManageProduct>
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
    </myContext.Provider>
  );
}

export default App;
