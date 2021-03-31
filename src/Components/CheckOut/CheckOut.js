import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SubCheckOut from '../SubCheckOut/SubCheckOut';
import './CheckOut.css';


const CheckOut = () => {
    const {productId} = useParams();
    const [checkOuts, setCheckOuts] = useState({});
     console.log(checkOuts);
    useEffect(() => {
     fetch('http://localhost:7070/products/')
     .then(result => result.json())
     .then(data => {
        
        // console.log(data)

       
          const pd = data.find(datum => datum._id === productId)
          console.log(pd);
          setCheckOuts(pd);
        
        
     })

    }, [productId])


    

    return (
        <div style={{textAlign:'center', boxShadow: '4px 4px 6px gray', padding: '20px', margin: '25px'}} className="check-out">
            <h5>{productId}</h5>
           
            {/* <p>{checkOuts.name.name}</p>
            <p>{checkOuts.name.wight} gm</p>
            <p>{checkOuts.name.price} $</p> */}
        </div>
    );
};

export default CheckOut;