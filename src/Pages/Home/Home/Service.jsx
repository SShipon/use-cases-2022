import React from 'react';

const Service = ({service}) => {
    console.log(service);
    const {img,title,description,_id}=service
    return (
    <div style={{background:'#f9f9f9'}} className="card w-[500px]">
  <figure className="px-10 pt-10">
    <img style={{width:'120px', height:'120px',borderRadius:'50%'}} src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
  </div>
</div>
    );
};

export default Service;