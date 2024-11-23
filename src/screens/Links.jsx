import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import SocialIcon from "../components/SocialIcon";
import Tabs from "../components/Tabs";
import AutoSlick from "../components/AutoSlick";

const tabProject = [
  {
    url: "https://figma.com/community/plugin/1309939872279901716",
    imageUrl: "/Icons/Color Shader.svg",
    text: "Color Shader",
    subText: "Figma Plugin"
  },
  {
    url: "https://figma.com/community/plugin/1331204712224058956",
    imageUrl: "/Icons/Perfect Size.svg",
    text: "Perfect Size",
    subText: "Figma Plugin"
  },
  {
    url: "https://github.com/01kartic/Chrome-Extension-Popup-Boilerplate",
    imageUrl: "https://framerusercontent.com/images/GE9BKnJjaRTbtElv0yicHDUB64.png",
    text: "Chrome Extension",
    subText: "Boilerplate"
  },
  {
    url: "",
    imageUrl: "/Icons/SVGCollector.svg",
    text: "Coming Soon",
    subText: "Figma Plugin - Stay Tuned"
  }
]

const tabMore = [
  {
    url: "https://kartic.online/showcase",
    imageUrl: "/Icons/ProfileImage.svg",
    text: "Portfolio",
    subText: "UI Showcase"
  },
  {
    url: "https://buymeacoffee.com/kartic",
    imageUrl: "/Icons/Buy Me a Coffee.svg",
    text: "Buy Me a Coffee ☕"
  },
];

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
          content="https://kartic.online/OGs/linksOGImage.png"
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
          content="https://kartic.online/OGs/linksOGImage.png"
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
            <span className="text-black-200">UI/UX Designer</span>{" "}
            <span className="opacity-25">✦</span>{" "}
            <span className="text-black-200">Frontend Developer</span>
            <br />
            <span className="opacity-25">✦</span>{" "}
            <span className="text-black-200">
              Passionate about creating excellence
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

          <Tabs title="Featured Projects" tabData={tabProject} />

          <Tabs title="More" tabData={tabMore} />

          <p className="text-sm font-medium mx-auto my-24">
            <span className="opacity-25 me-3">✦</span>
            <span className="text-black-500 opacity-40">Created by</span>{" "}
            <a
              href="http://linkedin.com/in/01kartic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black-500 hover:text-blue-400 opacity-40 hover:opacity-100"
            >
              @Kartic
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
