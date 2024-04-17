import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Links from "./screens/Links";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-screen bg-white text-black -my-12">
          <div className="flex flex-row item-center justify-center my-4">
            <img src="/Design/Rightbar.svg" alt="Rightbar" className='w-[72px] sm:w-[92px]' />
            <p className="text-sm font-semibold text-black-500 opacity-40 mx-3">✦</p>
            <img src="/Design/Leftbar.svg" alt="Leftbar" className='w-[72px] sm:w-[92px]' />
          </div>
          <h4 className>Welcome to Site of <b>Kartic</b></h4>
          <div className="flex flex-row item-center justify-center my-4">
            <img src="/Design/Rightbar.svg" alt="Rightbar" className='w-[72px] sm:w-[92px] myFlip' />
            <p className="text-sm font-semibold text-black-500 opacity-40 mx-3">✦</p>
            <img src="/Design/Leftbar.svg" alt="Leftbar" className='w-[72px] sm:w-[92px] myFlip' />
          </div>
        </div>
      ) : (
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Links />} />
              <Route path="/Links" element={<Links />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
