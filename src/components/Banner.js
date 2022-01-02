/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Divider } from "@mui/material";

export default function Banner() {
  const bannerImages = [
    { src: "/banner/1.jpg" },
    { src: "/banner/2.jpg" },
    { src: "/banner/3.jpg" },
    { src: "/banner/4.jpg" },
    { src: "/banner/5.jpg" },
    { src: "/banner/6.jpg" },
  ];
  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showArrows
        stopOnHover={false}
        showStatus={false}
        showThumbs={false}
      >
        {bannerImages.map((bannerImage) => (
          <div key={bannerImage.src}>
            <img src={bannerImage.src} alt="banner" />
          </div>
        ))}
      </Carousel>
    </>
  );
}
