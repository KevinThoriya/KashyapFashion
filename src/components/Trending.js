import React from "react";
import SlideFourProduct from "./SlideFourProduct";

export default function Trending() {
  const data = {
    title: "Trading",
    data: [
      {
        name: "Off-White Stone Embroidered Net Indowestern Gown-GW1154",
        price: "61,000",
        currency: "₹",
        src: "/Trending/1.jpg",
      },
      {
        name: "Ballerina Pink Stone Embroidered Net Evening Gown-GW1155",
        price: "34,000",
        currency: "₹",
        src: "/Trending/2.jpg",
      },
      {
        name: "White Zari Embroidered Georgette Designer Salwar-SI1219",
        price: "67,000",
        currency: "₹",
        src: "/Trending/3.jpg",
      },
      {
        name: "White Bead Embroidered Organza Palazzo Suit-SI1754",
        price: "12,200",
        currency: "₹",
        src: "/Trending/4.jpg",
      },
      {
        name: "Teal Green Mirror Embroidered Georgette Designer Lehenga-GC3925",
        price: "78,500",
        currency: "₹",
        src: "/Trending/5.jpg",
      },
    ],
  };
  return <SlideFourProduct data={data} />;
}
