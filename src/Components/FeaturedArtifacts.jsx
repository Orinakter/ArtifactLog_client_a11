import React from 'react';

const FeaturedArtifacts = ({allData}) => {
    return (
        <div className='mt-16'>
            <h1 className='text-4xl text-center mb-12 font-bold'>Featured Artifacts</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-col-3 gap-6 mt-16 ">
                {
                    allData.map(item=>(
                        <div key={item?._id} className="border-2 p-8 rounded-xl">
                            <img src={item?.artifactImage} alt="" className='w-full h-[350px] rounded-xl' />
                            <h1 className='font-semibold mt-6'><span className='font-bold text-xl'>Artifact Name: </span> {item?.artifactName}</h1>
                            <p><span className='font-bold text-xl'>Historical-Context: </span> {item?.historicalContext}</p>
                            <p><span className='font-bold text-xl'>Likes: </span> {item?.likes}</p>
                            <div className="text-center mt-4">
                                <button className='btn bg-blue-500 text-white font-bold'>View Details</button>
                            </div>


                        </div>
                    ))
                }
            </div>
            
        </div>
    );
};

export default FeaturedArtifacts;
