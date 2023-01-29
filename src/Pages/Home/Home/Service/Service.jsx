import React from 'react';
import './service.css'
const Service = ({service}) => {
    console.log(service);
    const {img,title,description,_id}=service
    return (
<div style={{background:'#f9f9f9'}} className=" my-card rounded-md">
      <figure className="px-10 pt-10">
        <img  style={{width:'120px', margin:'auto', height:'120px',borderRadius:'50%'}} src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}!</h2>
        <p className='text-sm '>{description}</p>
      </div>
    </div>



    );
};

export default Service;





/* 

<div style={{background:'#f9f9f9'}} className="card w-96 ">
      <figure className="px-10 pt-10">
        <img style={{width:'120px', height:'120px',borderRadius:'50%'}} src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}!</h2>
        <p>{description}</p>
      </div>
    </div>



      <div style={{background:'#f9f9f9'}} className="card">
  <figure className="px-10 pt-10">
    <img style={{width:'120px', height:'120px',borderRadius:'50%'}} src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
  </div>
</div>
*/