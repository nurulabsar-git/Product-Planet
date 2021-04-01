import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../Home/Home';
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
        <div className="m-5" p-5> 
         <section className="m-md-5 p-md-2 d-flex justify-content-between bg-light rounded">
            <p><strong>Product Name</strong></p>
            <p><strong>Wight</strong></p>
            <p><strong>Price</strong></p>
            <p><strong>Action</strong></p>
             </section>

          {
              manageProducts.map(datum => 
              <section className="m-md-5 d-flex justify-content-between">
                 
                  <p className="fw-bolder">{datum.name.name}</p> <br/> <br/>
                  <p className="fw-bolder"> {datum.name.wight}</p>
                  <p className="fw-bolder">{datum.name.price}</p>
                  <div>
                  <button className="bg-warning rounded m-2"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                  <button className="bg-success rounded"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                  </div>
                 
              </section>
              
              
              )
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