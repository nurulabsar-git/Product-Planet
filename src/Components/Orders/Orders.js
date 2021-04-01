import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Orders = () => {
    const {ordersId} = useParams();
    
    

    const [orders, setOrders] = useState({})
    const [localStorageData, setLocalStorageData] = useState({})
    const getTime = window.localStorage.getItem('time');

    useEffect(() => {
    
      const getData = JSON.parse(window.localStorage.getItem('id'));
      console.log(getData); 
      setLocalStorageData(getData); 
      }, [])
    return (
        <div style={{margin:'30px', padding: '40px', boxShadow: '4px 4px 8px gray', borderRadius: '8px', height: '60vh', display: 'flex', justifyContent: 'space-between'}}>
            
            <div>
            <h4>Name: {localStorageData?.name?.name}</h4>
            <h4>Price: $ {localStorageData?.name?.price}</h4>
            <h4>Wight: {localStorageData?.name?.wight} gm</h4>
            <h6>Time: {getTime}</h6>
            </div>
            <div>
               <img src={localStorageData.imageURL} style={{width: '70%'}} alt=""/> 
            </div>
            
        </div>
    );
};

export default Orders;