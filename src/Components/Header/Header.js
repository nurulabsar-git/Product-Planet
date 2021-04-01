import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav>
            
            <Link className="Link" to="/">Home</Link>
        
        <Link className="Link" to="/manageProducts">Manage Products</Link>
        <Link className="Link" to="/AdminParts">Admin</Link>
        <Link className="Link" to="/orders">Orders</Link>
           
            <Link className="Link" to="/login">LogIn</Link>
            </nav>
        </div>
    );
};

export default Header;