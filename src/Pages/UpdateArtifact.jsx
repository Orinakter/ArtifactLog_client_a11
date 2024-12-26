import { useContext } from "react";
import { authorizedContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";



const UpdateArtifact = () => {
    const data = useLoaderData()
    const {user} = useContext(authorizedContext)

    const updateArtifactHandler = (e)=>{
        e.preventDefault();

    const artifactAdderName = user?.displayName;
    const artifactAdderEmail = user?.email;

    const artifactName = e.target.artifactName.value;
    const artifactImage = e.target.artifactImage.value;
    const artifactType = e.target.artifactType.value;
    const historicalContext = e.target.historicalContext.value;
    const createdAt = e.target.createdAt.value;
    const discoveredAt = e.target.discoveredAt.value;
    const discoveredBy = e.target.discoveredBy.value;
    const presentLocation = e.target.presentLocation.value;
    

    const updateArtifactInfo = {
      artifactName,
      artifactImage,
      artifactType,
      historicalContext,
      createdAt,
      discoveredAt,
      discoveredBy,
      presentLocation,
      artifactAdderName,
      artifactAdderEmail,
     
    };

    axios
    .patch(`http://localhost:5000/updateArtifact/${data._id}`, updateArtifactInfo)
    .then((res) => {
      console.log(res.data);

      Swal.fire({
        title: "Success",
        text: "Artifact Added SuccessFully",
        icon: "Success",
      });
    });


    }


   

    return (
        <div>
            <div className="max-w-2xl mx-auto mt-8 p-6 bg-[#E6F2FA] rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-center mb-6">Update Artifact</h1>
      <form onSubmit={updateArtifactHandler} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Artifact Name
          </label>
          <input
            type="text"
           
            defaultValue={data?.artifactName}
            name="artifactName"
            placeholder="Enter artifact name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Artifact Image URL
          </label>
          <input
            type="text"
            
            name="artifactImage"
            placeholder="Enter image URL"
            defaultValue={data?.artifactImage}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Artifact Type
          </label>
          <select
            id="artifactType"
           defaultValue={data?.artifactType}
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="Tools">Tools</option>
            <option value="Weapons">Weapons</option>
            <option value="Documents">Documents</option>
            <option value="Writings">Writings</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Historical Context
          </label>
          <textarea
           
            name="historicalContext"
            defaultValue={data?. historicalContext}
            placeholder="Enter historical context"
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Created At
          </label>
          <input
            type="text"
            
            name="createdAt"
            defaultValue={data?.createdAt}
            placeholder="e.g., 100 BC"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Discovered At
          </label>
          <input
            type="text"
            
            name="discoveredAt"
            defaultValue={data?.discoveredAt}
            placeholder="e.g., 1799"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Discovered By
          </label>
          <input
            type="text"
           
            name="discoveredBy"
            defaultValue={data?.discoveredBy}
            placeholder="Enter discoverer's name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Present Location
          </label>
          <input
            type="text"
           
            name="presentLocation"
            defaultValue={data?.presentLocation}
            placeholder="Enter present location"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <input
            type="hidden"
            id="artifactAdderName"
            name="artifactAdderName"
          />
          <input
            type="hidden"
            id="artifactAdderEmail"
            name="artifactAdderEmail"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Update Artifact
        </button>
      </form>
    </div>
        </div>
    );
};

export default UpdateArtifact;