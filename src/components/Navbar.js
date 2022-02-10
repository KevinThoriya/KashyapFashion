/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import WhatsappRoundedIcon from "@mui/icons-material/WhatsappRounded";
import LoginSignupModal from "./LoginSignupModal";
import CartModal from "./cartModal";
import SearchModal from "./SearchModal";
import Link from "next/link";

const Navbar = () => {
  const WpUrl = "https://api.whatsapp.com/send?phone=917829928490";
  const [loginDialog, setLoginDialog] = React.useState(false);
  const [cartDialog, setCartDialog] = React.useState(false);
  const [searchDialog, setSearchDialog] = React.useState(false);

  const toggleCart = () => setCartDialog(!cartDialog);
  const toggleLogin = () => setLoginDialog(!loginDialog);
  const toggleSearch = () => setSearchDialog(!searchDialog);

  return (
    <>
      <AppBar
        position="sticky"
        color="primary"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        className="navbar lg:px-60"
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
        <Link
          href={`/`}
          passHref
          className="cursor-pointer"
          as={`/`}
        >
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            {/* <Image src="/logo.png" width={100} height={60} alt="logo" /> */}
            <img src="/logo.png" alt="logo" className="w-24" />
            </Typography>
            
            </Link>
          <nav className="flex flex-row-reverse space-x-0.5 space-x-reverse">
            <IconButton
              onClick={toggleCart}
              aria-label="account"
              className="ml-3"
              size="large"
            >
              <LocalMallRoundedIcon color="text" />
            </IconButton>
            <IconButton
              aria-label="account"
              className="ml-3"
              size="large"
              onClick={toggleSearch}
            >
              <SearchRoundedIcon color="text" />
            </IconButton>
            <Button variant="text" href={WpUrl}>
              <WhatsappRoundedIcon color="text" />
              <Typography variant="body1" className="ml-2 hidden sm:block">
                +91 - 7829928490
              </Typography>
            </Button>
          </nav>
          <IconButton
            onClick={toggleLogin}
            aria-label="account"
            className="ml-3"
            size="large"
          >
            <AccountCircleRoundedIcon color="text" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <LoginSignupModal open={loginDialog} close={toggleLogin} />
      <CartModal open={cartDialog} close={toggleCart} />
      <SearchModal open={searchDialog} close={toggleSearch} />
    </>
  );
};

export default Navbar;
