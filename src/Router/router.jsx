import { createBrowserRouter, useParams } from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";
import AllArtifacts from "../Pages/AllArtifacts";
import AddArtifacts from "../Pages/AddArtifacts";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyArtifacts from "../Pages/MyArtifacts";
import LikedArtifacts from "../Pages/LikedArtifacts";
import ArtifactDetails from "../Pages/ArtifactDetails";



export const router = createBrowserRouter([
    {
        path: "/",
        element : <RootLayout></RootLayout>,
        errorElement :<ErrorPage></ErrorPage>,
        children: [
            {
              path: "/",
              element: <HomePage></HomePage>,
              loader:()=>fetch('http://localhost:5000/artifactCard')
            },
            {
              path: "/all-artifacts",
              element: <AllArtifacts></AllArtifacts>,
            },
            {
              path: "/add-artifacts",
              element: <AddArtifacts></AddArtifacts>,
            },
            {
              path: "/login",
              element: <Login></Login>,
            },
            {
              path: "/register",
              element: <Register></Register>
            },
            {
              path: "/my-artifacts",
              element: <MyArtifacts></MyArtifacts>
            },

            {
              path: "/liked-artifacts",
              element: <LikedArtifacts></LikedArtifacts>
            },

            {
              path: "/artifact-details/:id",
              element: <ArtifactDetails></ArtifactDetails>,
              loader:({params})=>fetch(`http://localhost:5000/artifactlog/${params.id}`)
            },


          ],

    }
])