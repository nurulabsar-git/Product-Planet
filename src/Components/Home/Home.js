import React, { createContext, useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';
import SubHomePage from '../SubHomePage/SubHomePage';
import './Home.css';

export const MyContext = createContext();
const Home = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
    fetch('http://localhost:7070/products')
    .then(res => res.json())
    .then(data => setProducts(data))

    }, [])
    return (
        
        <div className="container">
            {
                products.map(product => <SubHomePage product = {product}></SubHomePage>)

            }
        </div>
        
 
    );
};

export default Home;