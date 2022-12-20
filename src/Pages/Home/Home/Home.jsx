import React from 'react';
import Banner from './Banner';
import Services from './Services';

const Home = () => {
    return (
        <div className='mx-8'>
           <Banner></Banner>
           <Services></Services>
        </div>
    );
};

export default Home;