import React from 'react';
import Banner from '../Components/Banner';
import HistorySpotlight from '../Components/HistorySpotlight';
import LegacyOfCulture from '../Components/LegacyOfCulture';
import FeaturedArtifacts from '../Components/FeaturedArtifacts';
import { useLoaderData } from 'react-router-dom';
import SeeAllButton from '../Components/SeeAllButton';
import { Helmet } from 'react-helmet';
import ArtifactQuiz from '../Components/ArtifactQuiz';

const HomePage = () => {
    const allData = useLoaderData()
    
    return (
        <div>
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
           <ArtifactQuiz></ArtifactQuiz>

        </div>
    );
};

export default HomePage;