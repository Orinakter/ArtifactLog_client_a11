import { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const AllArtifacts = () => {
    const [artifactData,setArtifactData] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/artifactlog`)
        .then((res) => res.json())
        .then(data=>setArtifactData(data))
        
    })
    return (
        <div className="">
            <Helmet>
                <title>
                AllArtifacts || ArtifactLog 
                </title>
            </Helmet>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12'>
            {
                artifactData.map(item=>(
                    <div key={item._id} className="border-2 p-8 rounded-xl">
                        <img src={item?.artifactImage} alt="" className="w-full h-[200px] rounded-xl" />
                        <h1 className="text-lg font-semibold mt-5"><span className="text-xl font-bold">ArtifactName: </span>  {item?.artifactName}</h1>
                        <p><span className="text-xl font-bold">ArtifactType: </span>{item?.artifactType}</p>
                        <p><span className="text-xl font-bold">DiscoveredBy: </span>{item?.discoveredBy}</p>
                        <p><span className="text-xl font-bold">PresentLocation: </span>{item?.presentLocation}</p>

                        <div className="mt-5 text-center">
                           <Link to={`/artifact-details/${item?._id}`}> <button className='btn bg-blue-500 text-white font-bold '>View Details</button></Link>
                        </div>
                        
            

                    </div>
                ))
            }
            
        </div>
        </div>
    );
};

export default AllArtifacts;