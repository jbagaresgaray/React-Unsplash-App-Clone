import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./AppAvatar.scss";

function AppAvatar({ uri, width, height, onClick }) {
  return (
    <div
      className="AppAvatar"
      onClick={onClick}
      style={{
        width,
        height,
      }}
    >
      <LazyLoadImage
        alt=""
        effect="blur"
        src={uri} // use normal <img> attributes as props
        className="AppFastImage"
      />
    </div>
  );
}

export default AppAvatar;
