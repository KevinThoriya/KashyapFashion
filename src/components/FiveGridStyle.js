/* eslint-disable @next/next/no-img-element */
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Poster({ title, src, main }) {
  return (
    <Link
          href={`/${encodeURIComponent(title)}`}
          passHref
          className="cursor-pointer"
          as={`/${title}`}
        >
    <div className="w-full h-full cursor-pointer">
      <img
        src={src}
        className={`${main ? "mainImage" : "cornerImage"}`}
        alt={title}
      />
      <Typography variant="body1" align="center" className="my-1">
        {title}
      </Typography>
      </div>
      </Link>
  );
}

export default function FiveGridStyle({
  data: { title, main, topLeft, topRight, bottomLeft, bottomRight },
}) {
  return (
    <div className="pt-4 lg:px-60">
      <Typography variant="h4" component="h1" align={"center"} className="py-2">
        {title}
      </Typography>
      <div className="grid grid-rows-2 grid-flow-row-dense sm:grid-flow-col  gap-1 sm:gap-4 ">
        <div className="">
          <Poster {...topLeft} />
        </div>
        <div className="">
          <Poster {...bottomLeft} />
        </div>
        <div className="col-span-2 row-span-2 ">
          <Poster {...main} main />
        </div>
        <div className="">
          <Poster {...topRight} />
        </div>
        <div className="">
          <Poster {...bottomRight} />
        </div>
      </div>
    </div>
  );
}
