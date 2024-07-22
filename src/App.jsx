import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Loading from "./links/Loading";
const Links = React.lazy(() => import("./links/Links"));

function PortfolioRedirect() {
  window.location.href = "https://kartic.framer.website";
  return null;
}

function ColorShaderRedirect() {
  window.location.href = "https://figma.com/community/plugin/1309939872279901716";
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <React.Suspense fallback={<Loading />}>
            <Links />
          </React.Suspense>
        } />
        <Route
          path="/links"
          element={
            <React.Suspense fallback={<Loading />}>
              <Links />
            </React.Suspense>
          }
        />
        <Route
          path="/portfolio"
          element={<PortfolioRedirect />}
        />
        <Route
          path="/ColorShader"
          element={<ColorShaderRedirect />}
        />
        <Route
          path="/Halftone"
          element={<Halftone />}
        />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;