import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./AppFastImage.scss";

function AppFastImage({ uri }) {
  return (
    <LazyLoadImage
      alt=""
      effect="blur"
      src={uri} // use normal <img> attributes as props
      className="AppFastImage"
    />
  );
}

export default AppFastImage;
