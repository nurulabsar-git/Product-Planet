import React from 'react';
import './SubHomePage.css'
const SubHomePage = (props) => {
    console.log(props);
    const {_id, name, imageURL} = props.product;
    return (
        <div className="sub-home-page">
           
           <img src={imageURL} alt="" style={{width: '50%'}}/>
            <p>{name.price}</p>
            <p>{name.name}</p>
            <p>{name.wight}</p>
           
        </div>
    );
};

export default SubHomePage;