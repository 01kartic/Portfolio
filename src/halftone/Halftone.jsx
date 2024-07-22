import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

function Halftone() {

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Reach out me on my Social Media & Check out Live Projects here !!"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:url" content="https://kartic.online/Halftone" />
        <meta property="og:title" content="Halftone" />
        <meta
          property="og:description"
          content="Reach out me on my Social Media & Check out Live Projects here !!"
        />
        <meta
          property="og:image"
          content="https://kartic.online/OGs/linksOGImage.png"
        />

        {/* Twitter */}
        <meta property="twitter:url" content="https://kartic.online/Halftone" />
        <meta property="twitter:title" content="Halftone" />
        <meta
          property="twitter:description"
          content="Reach out me on my Social Media & Check out Live Projects here !!"
        />
        <meta
          property="twitter:image"
          content="https://kartic.online/OGs/linksOGImage.png"
        />
      </Helmet>

      <div className="Gradient">
      </div>
    </>
  );
}

export default Halftone;
