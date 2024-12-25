import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { authorizedContext } from "../AuthProvider/AuthProvider";

const LikedArtifacts = () => {
  const { user } = useContext(authorizedContext);
  const [likeData, setLikeData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/mylike/${user?.email}`).then((res) => {
      setLikeData(res.data);
    });
  }, []);
  console.log(likeData);

  return (
    <div>
      {likeData.length === 0 ? (
        <div>
          <h1>No Data Found</h1>
        </div>
      ) : (
        <div className="">
            
        </div>
      )}
    </div>
  );
};

export default LikedArtifacts;
