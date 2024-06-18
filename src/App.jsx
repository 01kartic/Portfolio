import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Loading from "./components/Loading";
const Links = React.lazy(() => import("./screens/Links"));

function portfolioRedirect() {
  window.location.href = "https://kartic.framer.website";
  return null;
}

function colorShaderRedirect() {
  window.location.href = "https://figma.com/community/plugin/1309939872279901716";
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<Loading />}>
            <Links />
          </Suspense>
        } />
        <Route
          path="/links"
          element={
            <Suspense fallback={<Loading />}>
              <Links />
            </Suspense>
          }
        />
        <Route
          path="/portfolio"
          element={<portfolioRedirect />}
        />
        <Route
          path="/ColorShader"
          element={<colorShaderRedirect />}
        />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
