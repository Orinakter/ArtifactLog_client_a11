import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);

    return (
        <div>
            <div className="">
                <img src="https://i.ibb.co.com/WKwgp0q/istockphoto-537812190-612x612.jpg" alt="" className='mx-auto mt-12 rounded-xl' />
                <h1 className='text-4xl font-bold text-center mb-5'>{error.statusText}</h1>
                <h1 className='text-4xl font-bold text-center mb-5'>{error.status}</h1>
                <h1 className='text-4xl font-bold text-center mb-5'>{error.data}</h1>
            </div>
            <div className="text-center mt-12">
                <Link to ="/"><button className='btn bg-blue-500 text-white py-3 rounded-lg text-lg font-bold hover:opacity-90 transition duration-300'>Return Home</button></Link>
            </div>
           
        </div>
    );
};

export default ErrorPage;