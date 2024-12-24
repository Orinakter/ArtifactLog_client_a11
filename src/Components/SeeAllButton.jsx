import React from 'react';
import { Link } from 'react-router-dom';

const SeeAllButton = () => {
    return (
        <div className='text-center mt-24'>
           <Link to="/all-artifacts"> <button className='btn bg-blue-500 text-white font-bold text-2xl '>See All Button</button></Link>
        </div>
    );
};

export default SeeAllButton;