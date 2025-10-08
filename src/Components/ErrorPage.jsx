import React from 'react';
import ErrorImage from '/error-404.png'
const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center py-10'>
            <img src={ErrorImage} alt="404 not found" />
            <h1 className='text-4xl font-bold py-3'>Oops, page not found!</h1>
            <p>The page you are looking for is not available.</p>
        </div>
    );
};

export default ErrorPage;