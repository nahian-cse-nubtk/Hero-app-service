import React from 'react';
import ErrorImage from '/error-404.png'
import { useNavigate } from 'react-router';
const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col justify-center items-center py-10 space-y-1'>
            <img src={ErrorImage} alt="404 not found" />
            <h1 className='text-4xl font-bold py-3'>Oops, page not found!</h1>
            <p>The page you are looking for is not available.</p>
            <button onClick={()=>navigate(-1)} className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-bold ">Go Back</button>
        </div>
    );
};

export default ErrorPage;