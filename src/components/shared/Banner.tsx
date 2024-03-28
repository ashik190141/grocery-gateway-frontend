"use client"

import { useEffect, useState } from "react";

const Banner = () => {
   const [currentSlider, setCurrentSlider] = useState(0);
   const sliders = [
     {
       img: "https://i.ibb.co/9HjncnS/video-2024-03-21-20-27-52.gif",
       title: "Nature's Jewel: The Perfect Peach",
       des: "Behold the epitome of nature's sweetness - the perfect peach, showcased in all its glory. With its velvety skin and tantalizing aroma, this fruit is a true jewel of the orchard, enticing all who behold it with promises of juicy delight.Gently cradle this exquisite fruit in your palm and feel its weight, a testament to its ripeness and succulence.",
     },
     {
       img: "https://i.ibb.co/XJLw1TM/video-2024-03-21-20-28-09.gif",
       title: "Fresh Food: Nature's Bounty at Your Fingertips",
       des: "Freshness meets convenience! Dive into a world of vibrant colors and flavors with our selection of farm-fresh vegetables and fruits. That product is nature's finest offerings, sourced directly from local farms and markets to ensure peak freshness and quality.",
     },
     {
       img: "https://i.ibb.co/MPvhHgH/video-2024-03-21-20-28-16.gif",
       title: "Slice of Freshness: Elevate Your Culinary Creations",
       des: "Witness the artistry of gastronomy unfold as we present to you our meticulously sliced fresh vegetables. Each slice is a testament to our commitment to providing you with the finest produce, expertly prepared for your culinary adventures. Transform your dishes with the vibrant colors and textures of our sliced vegetables.",
     },
     {
       img: "https://i.ibb.co/XxB0wCr/video-2024-03-21-20-28-03.gif",
       title: "Fruitful Choices: Pick Your Perfect Produce",
       des: "Step into our bustling marketplace and immerse yourself in the delightful experience of hand-selecting your favorite fruits. With an abundance of choices laid out before you, each visit to our store is an opportunity to indulge in the freshest and finest produce available. Watch as customers carefully select each fruit, considering its ripeness, aroma, and texture.",
     },
   ];
   // if you don't want to change the slider automatically then you can just remove the useEffect
   useEffect(() => {
     const intervalId = setInterval(
       () =>
         setCurrentSlider(
           currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
         ),
       6000
     );
     return () => clearInterval(intervalId);
   }, [currentSlider, sliders.length]);
  return (
    <>
      <div
        className="w-full h-60 sm:h-96 md:h-[540px] lg:h-[100vh] flex flex-col items-center justify-center gap-5 opacity-90 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear"
        style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}
      >
        {/* text container here */}
        <div className="max-w-7xl mx-auto">
          <div className="drop-shadow-lg text-white text-center px-5">
            <div>
              <h1 className="text-xl lg:text-5xl font-bold mb-3 italic pb-3 flex gap-5">
                {sliders[currentSlider].title}
              </h1>
            </div>
            <div>
              <p className="text-sm md:text-base lg:text-2xl text-justify">
                {sliders[currentSlider].des}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
