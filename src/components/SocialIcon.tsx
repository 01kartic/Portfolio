import React from "react";

const iconData = [
  {
    url: "https://linkedin.com/in/01kartic",
    iconUrl: "./src/assets/LinkedIn.svg"
  },
  {
    url: "https://github.com/01Kartic",
    iconUrl: "./src/assets/Github.svg"
  },
  {
    url: "https://figma.com/@kartic",
    iconUrl: "./src/assets/Figma.svg"
  },
  {
    url: "https://instagram.com/01_kartic",
    iconUrl: "./src/assets/Instagram.svg"
  },
  {
    url: "https://buymeacoffee.com/kartic",
    iconUrl: "./src/assets/Buy Me a Coffee.svg"
  },
];

function SocialIcon() {
  return (
    <>
      {iconData.map((icon, index) => (
        <a
          key={index}
          href={icon.url}
          target="_blank"
          rel="noopener noreferrer"
          className="SocialIcon relative block w-[52px] h-[52px] mx-1.5 mb-2"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[16px] h-[16px] rounded-[16px] bgGradientForIcon opacity-0 transition duration-200 ease-in-out"></div>
          <img
            src={icon.iconUrl}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42px] h-[42px] rounded-[12px] z-0"
          />
        </a>
      ))}
    </>
  );
}

export default SocialIcon;
