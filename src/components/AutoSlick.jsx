import React, { useState, useEffect } from "react";

const slickData = [
  {
    url: "https://figma.com/community/plugin/1309939872279901716",
    imageUrl: "/Slicks/SlickImage1.svg",
  },
  {
    url: "https://figma.com/community/plugin/1331204712224058956",
    imageUrl: "/Slicks/SlickImage2.svg",
  },
  {
    url: "",
    imageUrl: "/Slicks/SlickImage3.svg",
  },
];

function AutoSlick() {
  const [slickDataIndex, setslickDataIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setslickDataIndex((slickDataIndex + 1) % slickData.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [slickDataIndex]);

  return (
    <div className="my-6 mx-auto">
      <a
        href={slickData[slickDataIndex].url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={slickData[slickDataIndex].imageUrl}
          alt="Images"
          className="border border-black-100 rounded-2xl"
        />
      </a>
    </div>
  );
}

export default AutoSlick;
