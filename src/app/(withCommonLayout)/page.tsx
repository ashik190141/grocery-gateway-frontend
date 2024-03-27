import FlashSale from '@/components/HomePage/FlashSale/FlashSale';
import React from 'react';
import Banner from '../../components/shared/Banner';
import Trending from '../../components/HomePage/Trending/Trending';
import TopCategory from '../../components/HomePage/TopCategory/TopCategory';


const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Trending></Trending>
            <FlashSale></FlashSale>
            <TopCategory></TopCategory>
        </div>
    );
};

export default HomePage;