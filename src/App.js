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
import LogIn from './Components/LogIn/LogIn';
import ManageProduct from './Components/ManageProduct/ManageProduct';
import Orders from './Components/Orders/Orders';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';




export const ThemeContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <ThemeContext.Provider value = {[loggedInUser, setLoggedInUser]}> 
     <div>
             <h4 style={{textShadow:'5px 5px 10px gray', textAlign:'center', marginTop: '20px'}} ><i>PRODUCT PLANET</i></h4>
      </div>
  
    <Router>
      <Header></Header>
      <Switch>
        <PrivateRoute path="/admin">
         <Admin></Admin>
        </PrivateRoute>
        <PrivateRoute path="/manageProducts">
          <ManageProduct></ManageProduct>
        </PrivateRoute>
        <PrivateRoute path="/product/:productId">
          <CheckOut></CheckOut>
        </PrivateRoute>
        <Route path="/orders/:ordersId">
          <Orders></Orders>
        </Route>
        <Route path="/login">
          <LogIn></LogIn>
        </Route>
        <Route exact path ="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
    </ThemeContext.Provider>
  );
}

export default App;
