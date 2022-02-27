export default function handler(req, res) {
  const data = {
    title: "Trading",
    total: 12,
    data: [
      {
        id: 1,
        name: "Off-White Stone Embroidered Net Indowestern Gown-GW1154",
        price: "61,000",
        currency: "₹",
        src: "/Trending/1.jpg",
        zoomSrc: "/Trending/1_zoom.png",
      },
      {
        id: 2,
        name: "Ballerina Pink Stone Embroidered Net Evening Gown-GW1155",
        price: "34,000",
        currency: "₹",
        src: "/Trending/2.jpg",
        zoomSrc: "/Trending/1_zoom.png",
      },
      {
        id: 3,
        name: "White Zari Embroidered Georgette Designer Salwar-SI1219",
        price: "67,000",
        currency: "₹",
        src: "/Trending/3.jpg",
        zoomSrc: "/Trending/1_zoom.png",
      },
      {
        id: 4,
        name: "White Bead Embroidered Organza Palazzo Suit-SI1754",
        price: "12,200",
        currency: "₹",
        src: "/Trending/4.jpg",
        zoomSrc: "/Trending/1_zoom.png",
      },
      {
        id: 5,
        name: "Teal Green Mirror Embroidered Georgette Designer Lehenga-GC3925",
        price: "78,500",
        currency: "₹",
        src: "/Trending/5.jpg",
        zoomSrc: "/Trending/1_zoom.png",
      },
    ],
  };
  res.status(200).json(data);
}
