/* eslint-disable @next/next/no-img-element */
import { IconButton, Typography } from "@mui/material";
import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export function ProductShortView({ name, src, price, currency }) {
  return (
    <div className="">
      <img src={src} alt={name} className="cornerImage m-auto" />
      <Typography variant="body1" align="center" className="my-1">
        {name}
      </Typography>
      <Typography variant="h6" align="center" className="my-1">
        {`${currency} ${price}`}
      </Typography>
    </div>
  );
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function SlideFourProduct({ data: { title, data } }) {
  const carousalRef = useRef(null);
  const next = () => {
    console.log(carousalRef);
    carousalRef.current.next();
  };
  const prev = () => {
    console.log(carousalRef);
    carousalRef.current.previous();
  };
  return (
    <div className="pt-4 lg:px-60 ">
      <div className="absolute right-60 ">
        <IconButton onClick={prev}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton onClick={next}>
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
      <Typography variant="h4" component="h1" align={"center"} className="py-2">
        {title}
      </Typography>

      <div className="">
        <Carousel ref={carousalRef} responsive={responsive} arrows={false}>
          {data.map((product) => (
            <ProductShortView key={product.src} {...product} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
