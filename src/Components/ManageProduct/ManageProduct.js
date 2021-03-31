import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../Home/Home';
import SubManageProducts from '../SubManageProducts/SubManageProducts';

const ManageProduct = () => {

  const [manageProducts, setManageProducts] = useState([])

   useEffect(() => {
       fetch('http://localhost:7070/products')
       .then(result => result.json())
       .then(data => {
           console.log(data);
           setManageProducts(data)
       })
   }, [])

    return (
        <div>
            <p>{manageProducts._id}</p>
          {
              manageProducts.map(datum => <p>{datum.length}</p>)
          }
        </div>
    );

    // <section>
    // <p className="fw-bolder">{datum.name.name}</p>
    // <p className="fw-bolder">{datum.name.name}</p>
    // <p className="fw-bolder">{datum.name.wight}</p>
    // <p className="fw-bolder">{datum.name.price}</p>
    // </section>
};

export default ManageProduct;