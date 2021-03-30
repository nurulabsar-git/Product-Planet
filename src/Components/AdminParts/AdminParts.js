import React from 'react';
import { useForm } from "react-hook-form";

const AdminParts = () => {
    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div>
    <form onSubmit={handleSubmit(onSubmit)}>
   
      <input name="example" defaultValue="test" ref={register} /> <br/>
      <input name="exampleRequired" ref={register({ required: true })} /> <br/>
      <input name="example" defaultValue="test" ref={register} /> <br/>
      <input name="exampleRequired" ref={register({ required: true })} /> <br/>
      <input name="exampleRequired" ref={register({ required: true })} /> <br/>
     
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default AdminParts;