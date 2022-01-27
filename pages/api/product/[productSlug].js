export default function handler(req, res) {
  const { productSlug } = req.query;
  let productDetail = {
    name: productSlug,
    category: "Salwar Kameez",
    photos: [
      {
        id: 1,
        name: "photo 1",
        src: "https://samyakkimg.gumlet.io/catalog/product/s/j/sj4498.jpg?w=576&dpr=2.0",
      },
      {
        id: 2,
        name: "photo 2",
        src: "https://samyakkimg.gumlet.io/catalog/product/s/j/sj4498-a.jpg?w=576&dpr=2.0",
      },
      {
        id: 3,
        name: "photo 3",
        src: "https://samyakkimg.gumlet.io/catalog/product/s/j/sj4498-b.jpg?w=576&dpr=2.0",
      },
      {
        id: 4,
        name: "photo 4",
        src: "https://samyakkimg.gumlet.io/catalog/product/s/j/sj4498-c.jpg?w=576&dpr=2.0",
      },
    ],
    price: "12000",
    currency: "$",
    inStock: true,
    size: [
      "-select- ",
      "XS(32)",
      "S(34)",
      "M(36)",
      "L(38)",
      "XL(40)",
      "XXl(42)",
    ],
    description: "smayancc",
    productInfo: {
      LEHENGA: {
        color: "blue",
        craft: "Embroidered",
        Embellishment: "	Sequins work",
        Fabric: "Georgette",
        "Lehenga Color": "Dark Peacock Green",
        "Lehenga Fabric": "Georgette",
        "Lehenga Length": "Floor Length",
        "Lehenga Style": "Flared",
        "Lehenga Work": "Sequins & Zari Work",
        Purity: "Pure",
      },
      DUPATTA: {
        "Dupatta Border": "Gold",
        "Dupatta Color": "Dark Pe`acock Green",
        "Dupatta Work": "Sequins, Lace & Zari `Work",
      },
      BLOUSE: {
        "Lehenga Choli": "Readymade",
        "Lehenga Choli Back Neck Pattern": "Square Neck",
        "Lehenga Choli Color": "Dark Peacock Green",
        "Lehenga Choli Fabric": "Silk",
        "Lehenga Choli Front Neck Pattern": "V-Neck",
        "Lehenga Choli Length": "38 cm",
        "Lehenga Choli Sleeves": "Sleeveless",
        "Lehenga Choli Work": "Sequins, Cutdana, Pearl, Zardosi & Zari Work",
        "Lehenga Choli Zip": "Side Zip",
        "Lehenga Lining Fabric": "Crepe",
      },
    },
    similar: [
      {
        name: "Off-White Stone Embroidered Net Indowestern Gown-GW1154",
        price: "61,000",
        currency: "₹",
        src: "/Trending/1.jpg",
        zoomSrc: "/Trending/1_zoom.png",
      },
      {
        name: "Ballerina Pink Stone Embroidered Net Evening Gown-GW1155",
        price: "34,000",
        currency: "₹",
        src: "/Trending/2.jpg",
        zoomSrc: "/Trending/1_zoom.png",
      },
      {
        name: "White Zari Embroidered Georgette Designer Salwar-SI1219",
        price: "67,000",
        currency: "₹",
        src: "/Trending/3.jpg",
        zoomSrc: "/Trending/1_zoom.png",
      },
      {
        name: "White Bead Embroidered Organza Palazzo Suit-SI1754",
        price: "12,200",
        currency: "₹",
        src: "/Trending/4.jpg",
        zoomSrc: "/Trending/1_zoom.png",
      },
      {
        name: "Teal Green Mirror Embroidered Georgette Designer Lehenga-GC3925",
        price: "78,500",
        currency: "₹",
        src: "/Trending/5.jpg",
        zoomSrc: "/Trending/1_zoom.png",
      },
    ],
  };
  res.status(200).json(productDetail);
}
