import React, { useEffect, useState } from 'react';
import SubHomePage from '../SubHomePage/SubHomePage';
import './Home.css';

const Home = () => {

    const [productsA, setProductsA] = useState([]);
    useEffect(() => {
    fetch('http://localhost:7070/products')
    .then(res => res.json())
    .then(data => setProductsA(data))

    }, [])
    return (
        <div className="container">
            {
                productsA.map(product => <SubHomePage product = {product}></SubHomePage>)
            }
        </div>
    );
};

export default Home;