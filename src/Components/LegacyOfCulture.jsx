import React from 'react';

const LegacyOfCulture = () => {
    return (
        <div className='mt-16'>
            <h1 className='text-5xl font-bold text-center mb-10'>Legacy of Cultures</h1>
             <div className="bg-gray-100 text-gray-800 py-20 rounded-lg">
      <div className="container mx-auto px-6 lg:px-16">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Legacy of Cultures
          </h2>
          <p className="text-lg mt-4 max-w-3xl mx-auto">
          Legacy of Cultures explores the timeless stories of humanity through artifacts that transcend generations. Each artifact reflects the art, beliefs, and traditions of its era, preserving the essence of diverse civilizations. Discover how these cultural treasures shape our identity, connect us to history, and inspire future generations with their enduring legacy.
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://i.ibb.co.com/crZwQc7/pexels-fatih-berat-orer-415995323-29861887.jpg"
              alt=""
              className="h-80 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                The Rosetta Stone
              </h3>
              <p className="text-sm text-gray-600 mt-2">
              The Rosetta Stone is an ancient Egyptian artifact featuring a decree in three scripts: Greek, Demotic, and hieroglyphic. Its Greek inscription helped scholars, especially Jean-François Champollion, decipher hieroglyphs, unlocking the understanding of ancient Egyptian language and culture.
              </p>
            </div>
          </div>

         
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://i.ibb.co.com/zFFfWVR/pexels-zonghaofeng-27573828.jpg"
              alt=""
              className="h-80 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                Samurai Armor
              </h3>
              <p className="text-sm text-gray-600 mt-2">
              Samurai armor, known as yoroi or kacchū, was a traditional Japanese protective gear worn by samurai warriors. It consisted of metal and leather plates, lacquered for durability, and featured intricate designs. The armor provided protection while allowing flexibility and mobility.
              </p>
            </div>
          </div>

         
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://i.ibb.co.com/8P6mg4P/pexels-fer-martinez-gonzalez-772917-12028952.jpg"
              alt=""
              className="h-80 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                Aztec Sun Stone
              </h3>
              <p className="text-sm text-gray-600 mt-2 ">
              The Aztec Sun Stone, also called the Calendar Stone, is a large, intricately carved basalt disk depicting the Aztec calendar and cosmology. It symbolizes the movement of the sun, cycles of time, and the Aztec view of the universe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
            
        </div>
    );
};

export default LegacyOfCulture;