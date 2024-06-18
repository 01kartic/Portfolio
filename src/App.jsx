import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Loading from "./components/Loading";
const Links = React.lazy(() => import("./screens/Links"));

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
          element={<Navigate to="https://kartic.framer.website" replace />}
        />
        <Route
          path="/ColorShader"
          element={<Navigate to="https://figma.com/community/plugin/1309939872279901716" replace />}
        />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;