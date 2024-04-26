import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Loading from "./components/Loading";
const Links = React.lazy(() => import("./screens/Links"));

function App() {
  useEffect(() => {
    window.location.href = "https://kartic.framer.website";
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/links"
          element={
            <Suspense fallback={<Loading />}>
              <Links />
            </Suspense>
          }
        />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
