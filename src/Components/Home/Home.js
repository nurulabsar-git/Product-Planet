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
     <section>
      
         <div className="container">
          {
              products.length === 0 && <div class="text-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          }

            {
                products.map(product => <SubHomePage product = {product}></SubHomePage>)

            }
        </div>

        <div className="footer-style">
            <footer>
                @All assignment rights are reserved
            </footer>
        </div>
     </section>
 
    );
};

export default Home;