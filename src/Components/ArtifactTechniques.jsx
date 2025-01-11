import React from 'react';
import { SiCodeclimate } from 'react-icons/si';

const ArtifactTechniques = () => {
    return (
        <div class="bg-[#E6F2FA] py-12 mt-16">
  <div class="max-w-6xl mx-auto px-6">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-gray-800">Artifact Preservation Techniques</h2>
      <p class="text-gray-600 mt-3">
      Artifact preservation involves techniques like climate control, proper handling, and storage in acid-free materials to prevent deterioration. Regular cleaning, careful restoration, and using UV-protective displays help maintain artifacts. Advanced methods like digital imaging and 3D scanning also aid in preserving detailed records for future generations.
      </p>
    </div>

   
    <div class="flex flex-col md:flex-row items-center mb-12">
      <div class="flex-1">
        <div class="bg-blue-500 text-white rounded-lg shadow-md p-6">
          <h3 class="text-2xl font-semibold">Climate Control</h3>
          <p class="mt-4">
            Maintaining optimal temperature and humidity levels to ensure artifacts remain intact and unaffected by environmental changes.
          </p>
        </div>
      </div>
      <div class="flex-1 mt-6 md:mt-0 md:ml-6">
        <img src="https://i.ibb.co.com/LzzgLsy/pexels-garvin-st-villier-719266-3778773.jpg" alt="" class="rounded-lg shadow-lg w-full h-[250px] object-cover"/>
      </div>
    </div>

    
    <div class="flex flex-col md:flex-row-reverse items-center mb-12">
      <div class="flex-1">
        <div class="bg-blue-500 text-white rounded-lg shadow-md p-6">
          <h3 class="text-2xl font-semibold">UV Shielding</h3>
          <p class="mt-4">
            Protecting artifacts from harmful ultraviolet rays to prevent fading, cracking, and other damage caused by exposure to sunlight.
          </p>
        </div>
      </div>
      <div class="flex-1 mt-6 md:mt-0 md:mr-6">
        <img src="https://i.ibb.co.com/cJ3y60n/pexels-cottonbro-7169847.jpg" alt="" class="rounded-lg shadow-lg w-full h-[250px] object-cover"/>
      </div>
    </div>

    
    <div class="flex flex-col md:flex-row items-center mb-12">
      <div class="flex-1">
        <div class="bg-blue-500 text-white rounded-lg shadow-md p-6">
          <h3 class="text-2xl font-semibold">Gentle Cleaning</h3>
          <p class="mt-4">
            Using advanced techniques and non-invasive tools to remove dirt and debris without damaging the artifact's surface or structure.
          </p>
        </div>
      </div>
      <div class="flex-1 mt-6 md:mt-0 md:ml-6">
        <img src="https://i.ibb.co.com/58RjD9R/pexels-polina-tankilevitch-4440616.jpg" alt="" class="rounded-lg shadow-lg w-full h-[250px] object-cover"/>
      </div>
    </div>

    
    <div class="flex flex-col md:flex-row-reverse items-center">
      <div class="flex-1">
        <div class="bg-blue-500 text-white rounded-lg shadow-md p-6">
          <h3 class="text-2xl font-semibold">Protective Coating</h3>
          <p class="mt-4">
            Applying advanced protective coatings to safeguard artifacts from pollutants, moisture, and accidental wear and tear.
          </p>
        </div>
      </div>
      <div class="flex-1 mt-6 md:mt-0 md:mr-6">
        <img src="https://i.ibb.co.com/L5cw21t/pexels-polina-tankilevitch-3735753.jpg" alt="Protective Coating" class="rounded-lg shadow-lg w-full h-[250px] object-cover"/>
      </div>
    </div>
  </div>
</div>
    );
};

export default ArtifactTechniques;