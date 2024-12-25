import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { authorizedContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
import axios from "axios";

const ArtifactDetails = () => {

 
  const { user,loading } = useContext(authorizedContext);
  const [data,setData] = useState({})
  const [likeLoad,setLikeLoad] = useState(1)

  const {id} = useParams()

  useEffect(()=>{
    axios.get(`http://localhost:5000/artifactlog/${id}`)
    .then(res=>{
      setData(res.data);
    })

  },[id,likeLoad])




  const likeHandler = (id)=>{

    axios.patch(`http://localhost:5000/artifactLike/${id}`)
    .then(res=>{
     setLikeLoad(likeLoad+1)
    })

  }

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
        
          <div className="flex-col flex lg:flex-row items-center gap-5 text-center mt-8 justify-center">
            <button onClick={()=>likeHandler(data?._id)} className="btn bg-blue-500 text-white font-bold">Like</button>
            <button  className="btn bg-blue-500 text-white font-bold"> Like Count: {data?.likes} </button>
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
