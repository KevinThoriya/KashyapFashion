/* eslint-disable @next/next/no-img-element */
import { IconButton, Typography } from "@mui/material";
import React, { useRef, useState } from "react";

export function ProductShortView({
  name,
  src: url,
  price,
  currency,
  zoomSrc: zoomSrc,
}) {
  const imageRef = useRef(null);
  const [src, setSrc] = useState(url);
  const ShowImageZoom = () => setSrc(zoomSrc || url);
  const showRegularImage = () => setSrc(url);

  return (
    <div className="">
      <div onMouseEnter={ShowImageZoom} onMouseLeave={showRegularImage}>
        <img
          ref={imageRef}
          src={src}
          alt={name}
          className="cornerImage m-auto"
        />
      </div>
      <Typography variant="body1" align="center" className="my-1">
        {name}
      </Typography>
      <Typography variant="h6" align="center" className="my-1">
        {`${currency} ${price}`}
      </Typography>
    </div>
  );
}
