import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Loading from "./components/Loading";
import Links from "./screens/Links";

function PortfolioRedirect() {
  window.location.href = "https://kartic.framer.website";
  return null;
}

function ColorShaderRedirect() {
  window.location.href = "https://figma.com/community/plugin/1309939872279901716";
  return null;
}

function ShowcaseRedirect() {
  window.location.href = "https://www.figma.com/proto/SG8m2YzLOMZAdQREJJwOug/Portfolio?node-id=2277-521&t=ivlvIXznkkfJGlAd-0&scaling=scale-down-width&content-scaling=fixed&page-id=2276%3A250&hide-ui=1";
  return null;
}

function TempForm() {
  window.location.href = "https://forms.gle/FsSdXghUeHihohEh6";
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
          path="/showcase"
          element={<ShowcaseRedirect />}
        />
        <Route
          path="/tempform"
          element={<TempForm />}
        />
        
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
