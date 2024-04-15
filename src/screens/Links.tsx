import React, { useEffect } from "react";
import SocialIcon from "../components/SocialIcon";
import SocialTabs from "../components/SocialTabs";
import AutoSlick from "../components/AutoSlick";

function Links() {

  useEffect(() => {
    document.title = 'Kartic | Links'
  }, [])

  return (
    <>
      <div className="Gradient">
        <div className="w-full flex flex-col item-center justify-center mt-40 sm:mt-48 z-10">
          <p className="text-center text-xl sm:text-2xl font-bold">
            Hey 👋, I’m
          </p>
          <p className="text-center text-5xl sm:text-6xl font-black sm:font-extrabold mt-6 mb-5 mx-auto">
            <img
              src="./src/assets/Kartic.png"
              alt="Kartik"
              className="w-[112px] sm:w-[160px]"
            />
          </p>
          <p className="text-center text-base sm:text-xl font-bold mb-6">
            UI/UX & Frontend Developer
          </p>


          <div className="flex flex-row item-center justify-center my-4">
            <img src="src/assets/Rightbar.svg" alt="Rightbar" className='w-[92px] sm:w-[132px]' />
            <p className="text-sm sm:text-xl font-bold text-black-500 opacity-40 mx-3">✦</p>
            <img src="src/assets/Leftbar.svg" alt="Leftbar" className='w-[92px] sm:w-[132px]' />
          </div>


          <AutoSlick />


          <p className="text-center text-sm sm:text-base font-bold sm:font-semibold tracking-widest opacity-40 mt-6 mb-3">
            Social Media
          </p>
          <div className="flex flex-wrap w-full mx-auto item-center justify-center my-2">
            <SocialIcon />
          </div>


          <p className="text-center text-sm sm:text-base font-bold sm:font-semibold tracking-widest opacity-40 mt-8 mb-3">
            Featured Projects
          </p>
          <div className="flex flex-col justify-center mx-auto item-center my-4">
            <SocialTabs />
          </div>


          <div className="flex flex-row item-center justify-center my-24">
            <img src="src/assets/Rightbar.svg" alt="Rightbar" className='w-[72px] sm:w-[132px]' />
            <p className="text-sm font-bold text-black-500 opacity-40 mx-3">Created by Kartic</p>
            <img src="src/assets/Leftbar.svg" alt="Leftbar" className='w-[72px] sm:w-[132px]' />
          </div>
        </div>


        <svg id="texture">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".8"
              numOctaves="4"
              stitchTiles="stitch"
            ></feTurbulence>
            <feColorMatrix type="saturate" values="0"></feColorMatrix>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"></rect>
        </svg>
      </div>
    </>
  );
}

export default Links;
