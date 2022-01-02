import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import HighQualityIcon from "@mui/icons-material/HighQuality";
import SellIcon from "@mui/icons-material/Sell";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
function InfoWithIcon({ icon, title, text }) {
  return (
    <div className=" mx-3">
      <Typography variant="h6" className="">
        {icon}
        {title}
      </Typography>
      <Typography variant="caption" className="">
        {text}
      </Typography>
    </div>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="grid grid-flow-col lg:px-60 bg-primary py-5 mt-5">
        <InfoWithIcon
          icon={<AirplaneTicketIcon />}
          title={"90% READY TO SHIP"}
          text={
            "We impart assurance on worldwide delivery and 90% of the merchandise are ready to ship. Once the order placed from your end, the product ordered will be delivered to your doorstep within 3-4 business days."
          }
        />
        <InfoWithIcon
          icon={<HighQualityIcon />}
          title={"100% ORIGINAL QUALITY"}
          text={
            "Quality assurance of our product are highly uncompromisable as we offer 100% genuine quality, ensuring our products and services to meet upto your expectation."
          }
        />
        <InfoWithIcon
          icon={<SellIcon />}
          title={"BEST PRICE CHALLENGE"}
          text={
            "The prices offered here are in complete gratification with the customer as it is cost effective and best suitable with your purchase to make your shopping experience hassle free and easy right from the comfort of your couch."
          }
        />
        <div className=" mx-3 hidden sm:block">
          <Typography variant="h6" className=" " align="center">
            Connect With Us
          </Typography>
          <div className="flex flex-row w-60 items-center justify-center">
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <WhatsAppIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <div className="w-full">
            <Typography variant="body1" align="center">
              © 2022 smyankk
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </footer>
  );
}
