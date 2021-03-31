import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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


    
    const handleCheckOutClick = () => {
        
    }




    return (
        <div style={{textAlign:'center', boxShadow: '4px 4px 6px gray', padding: '20px', margin: '25px', height: '70vh', borderRadius:'8px'}} className="check-out">
           <div style={{float: 'left', textShadow: '4px 4px 6px green'}}> <h3>Check Out</h3></div> <br/> <br/>
            <section>
            <div className="d-flex justify-content-between border-bottom">
               <p className="title-style">Description</p>
               <p className="title-style">Quantity</p>
               <p className="title-style">Price</p>
                </div> <br/>

                <div className="d-flex justify-content-between">
               <h2>{checkOuts?.name?.name}</h2>
               <p>1</p>
                <h4>{checkOuts?.name?.price} $</h4>
                </div> <br/>

                <div className="d-flex justify-content-between border-bottom">
                <h2>{checkOuts?.name?.name}</h2>
                <p>1</p>
                <h4>{checkOuts?.name?.wight} gm</h4>
                </div> <br/>

                <div className="d-flex justify-content-between">
                <h2>Total</h2>
                <h4>{checkOuts?.name?.price} $</h4>
                </div>

            </section> <br/>
            <button onClick={handleCheckOutClick} className="check-button">Check Out</button>
            </div>
    );
};

export default CheckOut;