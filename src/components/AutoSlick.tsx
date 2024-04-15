import React, { useState, useEffect } from "react";

const slickData = [
  {
    url: "",
    imageUrl: "/SlickImage1.svg",
  },
  {
    url: "",
    imageUrl: "/SlickImage2.svg",
  },
];

function AutoSlick() {
  const [slickDataIndex, setslickDataIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setslickDataIndex((slickDataIndex + 1) % slickData.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [slickDataIndex]);

  return (
    <div className="my-6 mx-auto">
      <a href={slickData[slickDataIndex].url}>
        <img src={slickData[slickDataIndex].imageUrl} alt="Image" className="border border-black-100 rounded-3xl" />
      </a>
    </div>
  );
}

export default AutoSlick;
