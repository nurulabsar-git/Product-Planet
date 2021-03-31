import React from 'react';
import { useHistory } from 'react-router-dom';
import './SubHomePage.css'
const SubHomePage = (props) => {
    // console.log(props);
    const {_id, name, imageURL} = props.product;

    const history = useHistory();

    const handleButtonClick = (parameter) => {
      
        history.push(`/product/${parameter}`);
        
    }

    return (
        <div className="sub-home-page">
           
           <img src={imageURL} alt="" style={{width: '50%'}}/>
           <h4>{name.name}</h4>
            <p>${name.price}</p>
            <p>{name.wight} gm</p>
            <button onClick={()=> {handleButtonClick(_id)}} className="main-button">Buy Now</button>
         </div>
    );
};

export default SubHomePage;