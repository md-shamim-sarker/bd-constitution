import React from 'react';
import cover from '../assets/cover.jpg';

const Banner = () => {
    return (
        <div className='flex justify-center'>
            <img src={cover} alt="..." className='w-full lg:w-[50vw]' />
        </div>
    );
};

export default Banner;