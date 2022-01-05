/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import Link from "next/link";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import WhatsappRoundedIcon from "@mui/icons-material/WhatsappRounded";
import Image from "next/image";
import Modal from "@mui/material/Modal";
import { Copyright } from "@mui/icons-material";
import Paper from "@mui/material/Paper";
import CloseIcon from "@mui/icons-material/Close";

import {
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";

const Navbar = () => {
  const WpUrl = "https://api.whatsapp.com/send?phone=917829928490";
  const [loginDialog, setLoginDialog] = React.useState(false);

  const toggleLogin = () => {
    setLoginDialog(!loginDialog);
  };
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
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            {/* <Image src="/logo.png" width={100} height={60} alt="logo" /> */}
            <img src="/logo.png" alt="logo" className="w-24" />
          </Typography>
          <nav className="flex flex-row-reverse space-x-0.5 space-x-reverse">
            <IconButton aria-label="account" className="ml-3" size="large">
              <LocalMallRoundedIcon color="text" />
            </IconButton>
            <IconButton aria-label="account" className="ml-3" size="large">
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
    </>
  );
};

const SignIn = ({ onSignup }) => {
  return (
    <div className=" overflow-scroll flex-1">
      <Grid container component="main" className="h-full">
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={() => {
                alert("submit ");
              }}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                color="primary"
                variant="outlined"
                sx={{ mt: 3, mb: 2, p: 1 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Button variant="text">Forgot password?</Button>
                </Grid>
                <Grid item>
                  <Button
                    onClick={onSignup}
                    variant="text"
                    className="text-primary"
                  >
                    {"Don't have an account? Sign Up"}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

const SignUp = ({ onSignIn }) => {
  return (
    <div className="flex-1 overflow-scroll">
      <Grid container component="main" className="h-full">
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
              Create Account
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={() => {
                alert("submit ");
              }}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="ConfirmPassword"
                label="Confirm Password"
                type="password"
                id="ConfirmPassword"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="i accept terms and conditions!"
              />
              <Button
                type="submit"
                fullWidth
                color="primary"
                variant="outlined"
                sx={{ mt: 3, mb: 2, p: 1 }}
              >
                Sign UP
              </Button>
              <Grid container>
                <Grid item>
                  <Button
                    onClick={onSignIn}
                    variant="text"
                    className="text-primary"
                  >
                    {"Already have an account? Sign In"}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

const LoginSignupModal = ({ open, close }) => {
  const [signup, setSignup] = React.useState(false);
  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="self-center flex place-self-center justify-center"
    >
      <>
        <div className="bg-gray-50 rounded-lg h-full w-full sm:h-5/6 sm:w-4/6 flex self-center bg-white-300 flex-row border-4 border-gray-200">
          {signup ? (
            <SignUp onSignIn={() => setSignup(false)} />
          ) : (
            <SignIn onSignup={() => setSignup(true)} />
          )}
        </div>
        <div className="absolute right-2 top-2 ">
          <IconButton onClick={close} size="large">
            <CloseIcon />
          </IconButton>
        </div>
      </>
    </Modal>
  );
};

export default Navbar;
