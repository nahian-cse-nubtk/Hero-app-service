import React from 'react';
import appError from '/App-Error.png'
import { useNavigate } from 'react-router';

const CustomError = () => {
    const navigate = useNavigate()
    return (
        <div className=' flex flex-col items-center text-center py-10 space-y-2' >
            <img src={appError} alt='app not found'></img>
            <h1 className='text-4xl'>OPPS!! APP NOT FOUND</h1>
            <p>The App you are requesting is not found on our system.  please try another apps</p>
            <button onClick={()=>navigate(-1)} className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-bold ">Go Back</button>

        </div>
    );
};

export default CustomError;