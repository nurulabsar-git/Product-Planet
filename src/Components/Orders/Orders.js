import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Orders = () => {
    const {ordersId} = useParams();
    
    const [orders, setOrders] = useState({})

    useEffect(() => {
      fetch('http://localhost:7070/products/')
      .then(result => result.json())
      .then(data => {
          console.log(data);
         
          const or = data.find(singleData => singleData._id === ordersId)
          console.log(or);
      })

    }, [ordersId])
    return (
        <div style={{textAlign: 'center', margin:'20px'}}>
            <h1>Bangladesh</h1>
        </div>
    );
};

export default Orders;