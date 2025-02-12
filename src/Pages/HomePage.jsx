import React, { useContext } from 'react';
import Banner from '../Components/Banner';
import HistorySpotlight from '../Components/HistorySpotlight';
import LegacyOfCulture from '../Components/LegacyOfCulture';
import FeaturedArtifacts from '../Components/FeaturedArtifacts';
import { useLoaderData } from 'react-router-dom';
import SeeAllButton from '../Components/SeeAllButton';
import { Helmet } from 'react-helmet';
import ArtifactQuiz from '../Components/ArtifactQuiz';
import ArtifactTechniques from '../Components/ArtifactTechniques';
import { ThemeContext } from '../AuthProvider/ThemeProvider';

const HomePage = () => {
    const allData = useLoaderData()
    const {theme} = useContext(ThemeContext)
    
    return (
        <div className={`${theme?"bg-gray-800 text-white" : "bg-white text-black" }`}>
            <Helmet>
               <title>
               Home || ArtifactLog
               </title>

            </Helmet>
           <Banner></Banner>
           <FeaturedArtifacts allData={allData}></FeaturedArtifacts>
           <SeeAllButton></SeeAllButton>
           <LegacyOfCulture></LegacyOfCulture>
           <HistorySpotlight></HistorySpotlight>
           <ArtifactTechniques></ArtifactTechniques>
           <ArtifactQuiz></ArtifactQuiz>

        </div>
    );
};

export default HomePage;