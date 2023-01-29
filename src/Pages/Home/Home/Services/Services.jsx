import React from 'react';
import img from '../../../../assets/imges/1620388926083.svg'
import Service from '../Service/Service';
const Services = () => {
    const allServices =[{
        _id:1,
        img: img,
        title:'Blog Idea & Outline',
        description:'The easiest way to come up with catchy blog, essay, and article topics and content structures using AI writing',
    },
    {
        _id:1,
        img: img,
        title:'Blog Idea & Outline',
        description:'The easiest way to come up with catchy blog, essay, and article topics and content structures using AI writing '
    },
    {
        _id:1,
        img: img,
        title:'Blog Idea & Outline',
        description:'The easiest way to come up with catchy blog, essay, and article topics and content structures using AI writing '
    },
    {
        _id:1,
        img: img,
        title:'Blog Idea & Outline',
        description:'The easiest way to come up with catchy blog, essay, and article topics and content structures using AI writing'
    },
    {
        _id:1,
        img: img,
        title:'Blog Idea & Outline',
        description:'The easiest way to come up with catchy blog, essay, and article topics and content structures using AI writing'
    },
    {
        _id:1,
        img: img,
        title:'Blog Idea & Outline',
        description:'The easiest way to come up with catchy blog, essay, and article topics and content structures using AI writing'
    },
    {
        _id:1,
        img: img,
        title:'Blog Idea & Outline',
        description:'The easiest way to come up with catchy blog, essay, and article topics and content structures using AI writing'
    },
    {
        _id:1,
        img: img,
        title:'Blog Idea & Outline',
        description:'The easiest way to come up with catchy blog, essay, and article topics and content structures using AI writing'
    },
    {
        _id:1,
        img: img,
        title:'Blog Idea & Outline',
        description:'The easiest way to come up with catchy blog, essay, and article topics and content structures using AI writing hello i am shipon form comilla is very nice zone hi'
    },
    
]
    return (
        <div className='sm:mx-16'>
            <h1 className='text-3xl text-center'>use usecase 2022</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4'>
            {
             allServices.map(service=><Service
             key={service.id}
               service={service}
             ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;