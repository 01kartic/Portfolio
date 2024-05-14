import React from "react";

const tabData = [
  {
    url: "https://figma.com/community/plugin/1309939872279901716",
    imageUrl: "/Icons/Color Shader.png",
    text: "Color Shader | Figma Plugin"
  },
  {
    url: "https://figma.com/community/plugin/1331204712224058956",
    imageUrl: "/Icons/Perfect Size.svg",
    text: "Perfect Size | Figma Plugin"
  },
  {
    url: "https://kartic.framer.website",
    imageUrl: "/Icons/ProfileImage.svg",
    text: "Portfolio"
  },
  {
    url: "https://buymeacoffee.com/kartic",
    imageUrl: "/Icons/Buy Me a Coffee.svg",
    text: "Buy Me a Coffee ☕"
  },
];

function SocialTabs() {
  return (
    <>
      {tabData.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="SocialTabs relative block w-[340px] h-[54px] mx-2 mb-4 border border-blue-100 rounded-[14px] hover:border-0"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[54px] rounded-[14px] bgGradientForTab opacity-0 transition-opacity duration-200 ease-in-out"></div>
          <div className="flex items-center justify-between absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[316px] h-[32px] rounded-[14px] z-0">
            <img src={item.imageUrl} className="w-[32px] h-[32px]" />
            <p className="w-[240px] font-medium">{item.text}</p>
            <svg
              xmlns="http://w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 12 12"
              fill="none"
              className="me-1"
            >
              <path
                d="M11.9 1C11.9 0.502944 11.4971 0.1 11 0.1H2.9C2.40294 0.1 2 0.502944 2 1C2 1.49706 2.40294 1.9 2.9 1.9H10.1V9.1C10.1 9.59706 10.5029 10 11 10C11.4971 10 11.9 9.59706 11.9 9.1V1ZM0.363604 10.3636C0.012132 10.7151 0.012132 11.2849 0.363604 11.6364C0.715076 11.9879 1.28492 11.9879 1.6364 11.6364L0.363604 10.3636ZM10.3636 0.363604L0.363604 10.3636L1.6364 11.6364L11.6364 1.6364L10.3636 0.363604Z"
                fill="#000000"
                fill-opacity="0.24"
              />
            </svg>
          </div>
        </a>
      ))}
    </>
  );
}

export default SocialTabs;
