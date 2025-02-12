import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { authorizedContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

const LikedArtifacts = () => {
  const { user, loading } = useContext(authorizedContext);
  const [likeData, setLikeData] = useState([]);

  useEffect(() => {
    axios.get(`https://artifact-log-server-side.vercel.app/mylike/${user?.email}`,{withCredentials:true}).then((res) => {
      setLikeData(res.data);
    });
  }, [user?.email]);

  return (
    <div>
      <Helmet>
        <title>LikedArtifacts || ArtifactLog</title>
      </Helmet>
      {likeData.length === 0 ? (
        <div className="mt-12 text-center p-8 ">
          <h1 className="font-bold text-4xl">No Data Found</h1>
          <img
            src="https://i.ibb.co.com/HTD0mTy/istockphoto-627210236-612x612.jpg"
            alt=""
            className="mx-auto mt-12 rounded-xl"
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
          {likeData.map((likes) => (
            <div key={likes._id} className="border-2 rounded-xl p-10">
              <img
                src={likes?.artifactImage}
                alt=""
                className="w-full h-[250px] rounded-xl"
              />

              <h1 className="mt-5">
                <span className="text-xl font-semibold">ArtifactName: </span>
                {likes?.artifactName}
              </h1>
              <p>
                <span className="text-xl font-semibold">ArtifactType: </span>
                {likes?.artifactType}
              </p>
              <p>
                <span className="text-xl font-semibold">
                  HistoricalContext:{" "}
                </span>
                {likes?.historicalContext}
              </p>

              <p>
                <span className="text-xl font-semibold">CreatedAt: </span>
                {likes?.createdAt}
              </p>

              <p>
                <span className="text-xl font-semibold">PresentLocation: </span>
                {likes?.presentLocation}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedArtifacts;
