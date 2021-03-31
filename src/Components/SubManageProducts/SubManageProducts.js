import React from 'react';

const SubManageProducts = (props) => {
    console.log(props);
    const {_id, name} = props.singleData;
    
    return (
        <div style={{margin:'30px'}}>

    <div>
    <div className="d-flex justify-content-between">
    <p className="fw-bolder">A</p>
    <p className="fw-bolder">B</p>
    <p className="fw-bolder">C</p>
    <p className="fw-bolder">C</p>
    
    </div>
    </div>
    <div className="d-flex justify-content-between">
    <p className="fw-bolder">{name.name}</p>
    <p className="fw-bolder">{name.wight}</p>
    <p className="fw-bolder">{name.price}</p>
    <button><i class="fa fa-pencil-square-o" aria-hidden="true"></i><i class="fa fa-trash-o" aria-hidden="true"></i></button>
    </div> <br/>
        </div>
    );
};


{/* <div style={{margin:'30px'}}>
            <table style={{width: '100%'}}>
            <tr className="d-flex justify-content-between">
                <td className="fw-bolder">{name.name}</td>
                <td className="fw-bolder">{name.wight}</td>
                <td className="fw-bolder">{name.price}</td>
                <button><i class="fa fa-pencil-square-o" aria-hidden="true"></i><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                
            </tr>
            </table>     
   
       </div> */}

export default SubManageProducts;