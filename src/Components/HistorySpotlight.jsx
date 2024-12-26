import React from 'react';

const HistorySpotlight = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-3xl font-bold text-center'>History Spotlight</h1>
             <section className="mt-5 py-20 bg-gray-100 rounded-lg text-white overflow-hidden">
      
      <div className="bg-gray-100 "></div>
      
      

      
      <div className="container mx-auto px-6 lg:px-16 z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            History Spotlight
          </h2>
          <p className="mt-4 text-black max-w-2xl mx-auto">
          Unveil the untold stories of history's treasures in our 'History Spotlight.' Discover timeless artifacts, their hidden secrets, and the legacies they carry. Dive into a world of wonder, where each piece reveals a fascinating journey through time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
         
          <div className="">
            <img
              src="https://i.ibb.co.com/TBdgjsg/istockphoto-1420761661-612x612.jpg"
              alt=""
              className="rounded-lg shadow-lg w-full"
            />
           
            
          </div>

        
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-black">
              The Lost Scepter of Atlantis
            </h3>
            <p className="text-black mb-6">
              Legend speaks of a scepter wielded by ancient kings, believed to
              hold the power to command the seas. Unearthed from the depths of
              the Atlantic, this relic bridges the gap between myth and reality.
            </p>
            <ul className="list-disc list-inside space-y-2 text-black">
              <li>Origin: Circa 2,500 BCE</li>
              <li>Material: Rare Orichalcum Alloy</li>
              <li>Significance: Symbol of authority and mythological power</li>
            </ul>
            <a
              
              className="inline-block mt-8 bg-blue-500 text-white font-bold py-3 px-8 rounded-lg font-bold shadow-md"
            >
              Explore More
            </a>
          </div>
        </div>
      </div>
    </section>
            
        </div>
    );
};

export default HistorySpotlight;