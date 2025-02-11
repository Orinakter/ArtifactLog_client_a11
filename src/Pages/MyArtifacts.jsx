import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { data, Link, useNavigate } from "react-router-dom";
import { authorizedContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyArtifacts = () => {
  const { user } = useContext(authorizedContext);
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://artifact-log-server-side.vercel.app/myArtifact/${user?.email}`,
        { withCredentials: true }
      )
      .then((data) => {
        setArtifacts(data.data);
        setLoading(false);
      });
  }, [user?.email]);

  const deleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://artifact-log-server-side.vercel.app/deleteArtifact/${id}`
          )
          .then((res) => {
            const remining = artifacts.filter((item) => item._id !== id);
            setArtifacts(remining);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          });
      }
    });
  };

  return (
    <div className="">
      <Helmet>
        <title>MyArtifacts || ArtifactLog</title>
      </Helmet>
      <div className="">
        {artifacts.length === 0 ? (
          <div className="mt-12 text-center p-8">
            <h1 className="font-bold text-4xl">
              You have not added any artifacts yet. Start by adding one now!
            </h1>
          </div>
        ) : (
          // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          //   {artifacts.map((item) => (
          //     <div key={item._id} className="border-2 rounded-xl p-10">
          //       <img
          //         src={item?.artifactImage}
          //         alt=""
          //         className="w-full h-[250px] rounded-xl"
          //       />

          //       <h1>
          //         <span className="text-xl font-semibold">ArtifactName: </span>
          //         {item?.artifactName}
          //       </h1>
          //       <p>
          //         <span className="text-xl font-semibold">ArtifactType: </span>
          //         {item?.artifactType}
          //       </p>
          //       <p>
          //         <span className="text-xl font-semibold">
          //           HistoricalContext:{" "}
          //         </span>
          //         {item?.historicalContext}
          //       </p>

          //       <p>
          //         <span className="text-xl font-semibold">CreatedAt: </span>
          //         {item?.createdAt}
          //       </p>

          //       <p>
          //         <span className="text-xl font-semibold">DiscoveredAt: </span>
          //         {item?.discoveredAt}
          //       </p>
          //       <p>
          //         <span className="text-xl font-semibold">discoveredBy: </span>
          //         {item?.discoveredBy}
          //       </p>
          //       <p>
          //         <span className="text-xl font-semibold">PresentLocation: </span>
          //         {item?.presentLocation}
          //       </p>
          //       <div className="flex justify-center items-center gap-4 mt-6">
          //         <Link to={`/update-artifact/${item?._id}`}>
          //           {" "}
          //           <button className="btn bg-blue-500 text-white font-bold">
          //             Update
          //           </button>
          //         </Link>
          //         <button
          //           onClick={() => deleteHandler(item?._id)}
          //           className="btn bg-red-600 text-white font-bold"
          //         >
          //           Delete
          //         </button>
          //       </div>
          //     </div>
          //   ))}
          // </div>

          // <div className="">
          //   <div className="p-4 max-w-[400px] mx-auto">
          //     <form onSubmit={searchHandler}>
          //       <div className="form-control w-full">
          //         <label className="label">
          //           <span className="label-text">Search</span>
          //         </label>
          //         <input
          //           type="text"
          //           name="search"
          //           className="input input-bordered"
          //           required
          //         />
          //       </div>
          //       <div className="flex justify-center">
          //         <input
          //           type="submit"
          //           value="Search"
          //           className="btn bg-red-600 text-white font-bold mt-4"
          //         />
          //       </div>
          //     </form>
          //   </div>

          <div className="container mx-auto p-6">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="bg-gray-200 w-full">
                    <th>SL</th>
                    <th>ArtifactImage</th>
                    <th>ArtifactName</th>
                    <th>ArtifactType</th>
                    <th>HistoricalContext</th>
                    <th>CreatedAt</th>
                    <th>DiscoveredAt</th>
                    <th>DiscoveredB</th>
                    <th>PresentLocation</th>
                    <th>Action</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {artifacts.map((item, index) => (
                    <tr className="bg-white my-2" key={item?._id}>
                      <td>{index + 1}</td>
                      <img
                          src={item?.artifactImage}
                          alt=""
                          className="w-12 h-12 rounded-full"
                        />
                      <td>{item?.artifactName}</td>
                      <td>
                        
                      </td>
                      <td>{item?.artifactType}</td>
                      <td>{item?.historicalContext}</td>
                      <td>{item?.createdAt}</td>
                      <td>{item?.discoveredAt}</td>
                      <td>{item?.discoveredBy}</td>
                      <td>{item?.presentLocation}</td>
                      <td>
                      <Link to={`/update-artifact/${item?._id}`}>
                   {" "}
                    <button className="btn bg-blue-500 text-white font-bold">
                      Update
                     </button>
                   </Link>
                      </td>

                      <td>
                        <button
                          onClick={() => deleteHandler(item?._id)}
                          className="btn bg-red-600 text-white font-bold"
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyArtifacts;
