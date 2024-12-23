import React from 'react';
import Banner from '../Components/Banner';
import HistorySpotlight from '../Components/HistorySpotlight';
import LegacyOfCulture from '../Components/LegacyOfCulture';
import FeaturedArtifacts from '../Components/FeaturedArtifacts';
import { useLoaderData } from 'react-router-dom';

const HomePage = () => {
    const allData = useLoaderData()
    
    return (
        <div>
           <Banner></Banner>
           <FeaturedArtifacts allData={allData}></FeaturedArtifacts>
           <LegacyOfCulture></LegacyOfCulture>
           <HistorySpotlight></HistorySpotlight>
        </div>
    );
};

export default HomePage;