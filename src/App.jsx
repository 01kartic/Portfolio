import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Links from "./screens/Links";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Links />} />
          <Route path="/Links" element={<Links />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
