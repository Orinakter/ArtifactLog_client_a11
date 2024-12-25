import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { data, useNavigate } from "react-router-dom";
import { authorizedContext } from "../AuthProvider/AuthProvider";

const MyArtifacts = () => {
  const { user } = useContext(authorizedContext);
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/myArtifact/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setArtifacts(data);
        setLoading(false)
      });
  }, []);
  console.log(artifacts);

  return (
    <div className="">
      {loading ? (
        <div className="flex justify-center">
          <span className="loading loading-spinner loading-xs"></span>
          <span className="loading loading-spinner loading-sm"></span>
          <span className="loading loading-spinner loading-md"></span>
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artifacts.map((item) => (
            <div key={item._id} className="border-2 rounded-xl p-10">
              <img
                src={item?.artifactImage}
                alt=""
                className="w-full h-[250px] rounded-xl"
              />

              <h1>
                <span className="text-xl font-semibold">ArtifactName: </span>
                {item?.artifactName}
              </h1>
              <p>
                <span className="text-xl font-semibold">ArtifactType: </span>
                {item?.artifactType}
              </p>
              <p>
                <span className="text-xl font-semibold">
                  HistoricalContext:{" "}
                </span>
                {item?.historicalContext}
              </p>

              <p>
                <span className="text-xl font-semibold">CreatedAt: </span>
                {item?.createdAt}
              </p>

              <p>
                <span className="text-xl font-semibold">DiscoveredAt: </span>
                {item?.discoveredAt}
              </p>
              <p>
                <span className="text-xl font-semibold">discoveredBy: </span>
                {item?.discoveredBy}
              </p>
              <p>
                <span className="text-xl font-semibold">PresentLocation: </span>
                {item?.presentLocation}
              </p>
              <div className="flex justify-center items-center gap-4 mt-6">
                <button className="btn bg-blue-500 text-white font-bold">Update</button>
                <button className="btn bg-red-600 text-white font-bold">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyArtifacts;
