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
  const [zoomed, setZoomed] = useState(false);
  const ShowImageZoom = () => setZoomed(true);
  const showRegularImage = () => setZoomed(false);

  return (
    <div className="">
      <div onMouseEnter={ShowImageZoom} onMouseLeave={showRegularImage}>
        <img src={url} alt={name} className="cornerImage m-auto" />
        <img
          src={zoomSrc || url}
          alt={name}
          style={{ opacity: zoomed ? 1 : 0 }}
          className={`cornerImage m-auto absolute left-0 right-0 top-0 `}
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
