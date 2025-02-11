import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const AllArtifacts = () => {
    const [artifactData,setArtifactData] = useState([])
    const [search,setSearch] = useState("")
    useEffect(()=>{
        axios.get(`https://artifact-log-server-side.vercel.app/artifactlog?search=${search}`)
       .then(data=>setArtifactData(data.data))
        
    },[search])
 
    return (
        <div className="">
            <Helmet>
                <title>
                AllArtifacts || ArtifactLog 
                </title>
            </Helmet>

            <div className="p-4 max-w-[400px] mx-auto">
          
          <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Search</span>
          </label>
          <input 
          onBlur={(e)=>setSearch(e.target.value)}
           type="text" name="search" className="input input-bordered" required />
          
          
        </div>
        <div className="flex justify-center">
        <input type="submit"  value="Search" className="btn bg-blue-500 text-white font-bold mt-4" />
        
        </div>

          

          </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12'>
            {
                artifactData.map(item=>(
                    <div key={item._id} className="border-2 p-8 rounded-xl flex flex-col">
                        <img src={item?.artifactImage} alt="" className="w-full h-[200px] rounded-xl" />
                       
                      <div className="flex-1">
                      <h1 className="text-lg font-semibold mt-5"><span className="text-xl font-bold">ArtifactName: </span>  {item?.artifactName}</h1>
                        <p><span className="text-xl font-bold">ArtifactType: </span>{item?.artifactType}</p>
                        <p><span className="text-xl font-bold">DiscoveredBy: </span>{item?.discoveredBy}</p>
                        <p><span className="text-xl font-bold">PresentLocation: </span>{item?.presentLocation}</p>
                      </div>
                       

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