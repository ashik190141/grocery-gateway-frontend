import FlashSale from '@/components/HomePage/FlashSale/FlashSale';
import React from 'react';
import Banner from '../../components/shared/Banner';
import Trending from '../../components/HomePage/Trending/Trending';
import TopCategory from '../../components/HomePage/TopCategory/TopCategory';
import Specialty from '../../components/HomePage/Specialty/Specialty';
import AwesomeProduct from '../../components/HomePage/AwesomeProduct/AwesomeProduct';


const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Trending></Trending>
            <Specialty></Specialty>
            <FlashSale></FlashSale>
            <AwesomeProduct></AwesomeProduct>
            <TopCategory></TopCategory>
        </div>
    );
};

export default HomePage;