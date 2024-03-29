export default function handler(req, res) {
  const fiveGridData = {
    title: "Ready-to-Ship Styles",
    main: {
      title: "Banarasi Sarees",
      src: "/sarees/banarasi.jpg",
    },
    topLeft: {
      title: "Sharara Suits",
      src: "/sarees/sharara.jpg",
    },
    bottomLeft: {
      title: "Evening Gowns",
      src: "/sarees/evening.jpg",
    },
    topRight: {
      title: "Kanchipuram Sarees",
      src: "/sarees/kanchipuram.jpg",
    },
    bottomRight: {
      title: "Party Wear Lehengas",
      src: "/sarees/party.jpg",
    },
  };
  res.status(200).json(fiveGridData);
}
