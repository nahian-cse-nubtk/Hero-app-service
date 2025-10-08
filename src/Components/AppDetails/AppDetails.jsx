import React, { useEffect, useState } from 'react';
import downloadImg from "/icon-downloads.png";
import ratingImg from "/icon-ratings.png";
import reviewImg from "/icon-review.png";
import { Link, useLoaderData, useParams } from 'react-router';
import AppDataBarChart from '../BarChart/AppDataBarChart';
import { toast } from 'react-toastify';
import CustomError from '../CustomError/CustomError';
import { addDataToLS, getItemFromLS } from '../../LocalStorage/LocalStorage';

const AppDetails = () => {
    const [install, setInstall] =useState(false);
    const id = useParams().id;
    const AppsData = useLoaderData();
    const EachData = AppsData.filter((data)=>data.id===parseInt(id))
    // console.log(typeof(id));

    useEffect(()=>{
        const lsData = getItemFromLS();
        // console.log(lsData)
        const installedAppId = lsData.filter((data)=>data===parseInt(id));
        // console.log(installedAppId);

        if(installedAppId.length){
            setInstall(true);
        }

    },[])

    if(EachData.length===0){

        return <CustomError/>
    }
    const [targetData]=EachData
    const data = targetData.ratings;


    const handleChangeState = ()=>{
        setInstall(true);
        toast('Installation is in progress');
        addDataToLS(targetData.id)


    }



    return (
        <div className='px-20 py-10'>
            <div className='flex gap-5'>
            <div><img className='w-[350px] h-[350px]' src={targetData.image} alt="" />
            </div>

            <div>

                <h1 className='text-2xl font-bold'>{targetData.title}</h1>
                <p className='mb-3'>Developed By <span className='text-[#9F62F2]'>{targetData.companyName}</span></p>
            <p className='border-b-2 border-gray-200'></p>


        <div className="flex justify-start items-center gap-10 pt-5">
        <div className='flex flex-col items-center'>
          <img src={downloadImg} alt="" className='w-[35px]'/>
          <p>Downloads</p>
          <h1 className="text-2xl font-bold">{targetData.downloads}M</h1>

        </div>
        <div className='flex flex-col items-center'>
            <img src={ratingImg} alt="" className='w-[35px]'/>
          <p>Average Ratings</p>
          <h1 className="text-2xl font-bold">{targetData.ratingAvg}</h1>


        </div>
        <div className='flex flex-col items-center'>
            <img src={reviewImg} alt="" className='w-[35px]'/>
          <p>Total Reviews</p>
          <h1 className="text-2xl font-bold">{targetData.reviews}</h1>


        </div>
        </div>
        <Link to=''>
        <button disabled={install} onClick={handleChangeState} className="btn bg-[#00D390] text-white mt-20 ">{install?'Installed':`Install Now (${targetData.size}MB`}</button>
        </Link>


      </div>

</div>
        <div className='mt-10'>
            <h1 className='font-bold text-2xl'>Ratings</h1>
            {
                <AppDataBarChart data={data}></AppDataBarChart>
            }
        </div>
        <div className='border-b-2 border-gray-300 mt-5'></div>
        <div className='mt-5'>
            <h1 className='text-2xl font-bold'>
                Description
            </h1>
            <p className='text-justify mt-5'>{targetData.description}</p>
        </div>
        </div>


    );
};

export default AppDetails;