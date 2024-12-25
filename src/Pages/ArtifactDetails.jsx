import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authorizedContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

const ArtifactDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const { user,loading } = useContext(authorizedContext);

  return (
    <div className="">
      <Helmet>
        <title>
        ArtifactDetails || ArtifactLog
        </title>
      </Helmet>
      {
        loading?(
          <div className="text-center">
          <div className="">
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
          </div>
        </div>
        ):(

          <div className="mt-24 md:max-w-[800px] border-2 mx-auto rounded-xl bg-[#E6F2FA]">
      <div
        key={data?._id}
        className="flex-col flex lg:flex-row justify-center items-center gap-16 p-8"
      >
        <div className="">
          <img src={data?.artifactImage} alt="" className="w-full h-[400px] rounded-xl" />
        </div>
        <div className="">
          <h1 className="text-lg font-semibold"><span className="text-xl font-bold">ArtifactName: </span>  {data?.artifactName}</h1>
          <p><span className="text-xl font-bold">ArtifactType: </span>{data?.artifactType}</p>
          <p><span className="text-xl font-bold">HistoricalContext: </span>{data?.historicalContext}</p>
          <p><span className="text-xl font-bold">CreatedAt: </span>{data?.createdAt}</p>
          <p><span className="text-xl font-bold">DiscoveredAt: </span>{data?.discoveredAt}</p>
          <p><span className="text-xl font-bold">DiscoveredBy: </span>{data?.discoveredBy}</p>
          <p><span className="text-xl font-bold">PresentLocation: </span>{data?.presentLocation}</p>
          <p><span className="text-xl font-bold">Likes: </span>{data?.likes}</p>
          <div className="flex-col flex lg:flex-row items-center gap-5 text-center mt-8 justify-center">
            <button className="btn bg-blue-500 text-white font-bold">Like</button>
            <button className="btn bg-blue-500 text-white font-bold"> Like Count</button>
        </div>
        </div>
        
      </div>
      
        
    </div>

        )
      }
    </div>
    
  );
};

export default ArtifactDetails;
