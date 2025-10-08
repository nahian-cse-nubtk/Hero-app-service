import React from "react";
import downloadImg from "/icon-downloads.png";
import ratingImg from "/icon-ratings.png";
import { useNavigate } from "react-router";

const AppCard = ({data}) => {
    const navigate =useNavigate();
    const handleNavigate =()=>{
        navigate(`/AppCard/${data.id}`)

    }
  return (
    <div onClick={handleNavigate} className="card bg-base-100 shadow-sm p-4 space-y-5">
      <figure>
        <img className="h-[316px] w-full"
          src={data.image}
          alt="App Image"
        />
      </figure>
      <div className="space-y-5">
        <h2 className="card-title">{data.title}</h2>
        <div className="flex justify-between ">
            <div><p className=" text-green-400 flex gap-2 bg-gray-100 p-2 rounded-sm"><img className="w-4" src={downloadImg} alt="Download icon" />{data.downloads} </p></div>
            <div><p className=" text-orange-400 flex gap-2 bg-orange-100 p-2 rounded-sm"><img className="w-4" src={ratingImg} alt="ratings" /> {data.ratingAvg}</p></div>
        </div>

      </div>
    </div>
  );
};

export default AppCard;
