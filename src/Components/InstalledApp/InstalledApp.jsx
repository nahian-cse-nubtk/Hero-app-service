import React from 'react';
import downloadImg from "/icon-downloads.png";
import ratingImg from "/icon-ratings.png";


const InstalledApp = ({data,handleUninstall}) => {
    return (
        <div className="flex justify-between items-center bg-white p-3 rounded-md mb-5">
        <div className="flex gap-3 items-center  ">
          <div>
            <img className ="w-[80px] h-[80px]" src={data.image} alt="installed app" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              {data.title}
            </h1>
            <div className="flex items-center gap-4 pt-1 ">
              <div>
                <p className=" text-green-400 flex gap-2   rounded-sm items-center">
                  <img className="w-4 h-4" src={downloadImg} alt="Download icon" /> {data.downloads}M
                </p>
              </div>
              <div >
                <p className=" text-orange-400 flex gap-2  rounded-sm items-center">
                  <img className="w-4 h-4" src={ratingImg} alt="ratings" /> <span>{data.ratingAvg}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>

        <button onClick={()=>handleUninstall(data.id,data.title)} className="btn bg-[#00D390] text-white ">Uninstall</button>

        </div>
        </div>
    );
};

export default InstalledApp;