import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import SocialIcon from "../components/SocialIcon";
import SocialTabs from "../components/SocialTabs";
import AutoSlick from "../components/AutoSlick";

function Links() {
  useEffect(() => {
    document.title = "Kartic | Links";
  }, []);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Reach out me on my Social Media & Check out Live Projects here !!"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:url" content="https://kartic.online/links" />
        <meta property="og:title" content="Kartic | Links" />
        <meta
          property="og:description"
          content="Reach out me on my Social Media & Check out Live Projects here !!"
        />
        <meta
          property="og:image"
          content="/OGs/LinksOG_Image.png"
        />

        {/* Twitter */}
        <meta property="twitter:url" content="https://kartic.online/links" />
        <meta property="twitter:title" content="Kartic | Links" />
        <meta
          property="twitter:description"
          content="Reach out me on my Social Media & Check out Live Projects here !!"
        />
        <meta
          property="twitter:image"
          content="/OGs/LinksOG_Image.png"
        />
      </Helmet>

      <div className="Gradient">
        <div className="w-full flex flex-col item-center justify-center mt-24 sm:mt-32 z-10">
          <a
            href="/"
            className="text-center text-5xl sm:text-6xl font-black sm:font-extrabold mt-6 mb-5 mx-auto"
          >
            <img
              src="/Design/Kartic.png"
              alt="Kartik"
              className="w-[112px] sm:w-[160px]"
            />
          </a>

          <p className="text-center text-base sm:text-lg mb-6">
            <span className="text-black-200">UI/UX Developer</span>{" "}
            <span className="opacity-25">✦</span>{" "}
            <span className="text-black-200">Frontend Developer</span>
            <br />
            <span className="opacity-25">✦</span>{" "}
            <span className="text-black-200">
              Like to create beautiful things
            </span>{" "}
            <span className="opacity-25">✦</span>
          </p>

          <div className="flex flex-row item-center justify-center my-4">
            <img
              src="/Design/Rightbar.svg"
              alt="Rightbar"
              className="w-[92px] sm:w-[132px]"
            />
            <p className="text-sm sm:text-xl font-bold text-black-500 opacity-40 mx-3">
              ✦
            </p>
            <img
              src="/Design/Leftbar.svg"
              alt="Leftbar"
              className="w-[92px] sm:w-[132px]"
            />
          </div>

          <AutoSlick />

          <p className="text-center text-xs sm:text-sm font-semibold sm:font-bold tracking-[0.3rem] opacity-30 mt-6 mb-3">
            SOCIAL MEDIA
          </p>

          <div className="flex flex-wrap w-full mx-auto item-center justify-center my-2">
            <SocialIcon />
          </div>

          <p className="text-center text-xs sm:text-sm font-semibold sm:font-bold tracking-[0.3rem] opacity-30 mt-8 mb-3">
            FEATURED PROJECTS
          </p>

          <div className="flex flex-col justify-center mx-auto item-center my-4">
            <SocialTabs />
          </div>

          <p className="text-sm font-medium mx-auto my-24">
            <span className="opacity-25 me-3">✦</span>
            <span className="text-black-500 opacity-40">Created by</span>{" "}
            <a
              href="http://linkedin.com/in/01kartic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black-500 hover:text-blue-400 opacity-40 hover:opacity-100"
            >
              Kartik Bambhaniya
            </a>
            <span className="opacity-25 ms-3">✦</span>
          </p>
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
