import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

import { Alert, CssBaseline, Grid } from "@mui/material";

import { useFormik } from "formik";
import TextInput from "./TextInput";
import * as Yup from "yup";
import axios from "axios";
import Routes from "./Routes";
import { useSnackbar } from "notistack";
import useUser from "./../Hooks/useUser";
import { useState } from "react";
const SignInValidationSchema = Yup.object().shape({
  email: Yup.string().email().required("Required"),
  password: Yup.string().required("Required"),
});

const SignIn = ({ onSignup, closeModal, admin }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { login } = useUser();
  const [errorSignIn, setErrorSignIn] = useState("");

  let onError = (data) => {
    setErrorSignIn(data?.message);
    console.log("error payload", data?.payload);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignInValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      setErrorSignIn("");
      login(values, onSuccess, onError);
    },
  });
  const { values, getFieldProps, errors, touched, submitForm } = formik;

  let onSuccess = (data) => {
    closeModal && closeModal();
    admin && admin(values);
  };

  return (
    <div className=" overflow-scroll flex-1">
      <Grid container component="main" className="h-full">
        <CssBaseline />

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
              onSubmit={(e) => {
                e.preventDefault();
              }}
              sx={{ mt: 1 }}
            >
              <TextInput
                name="email"
                autoFocus
                placeholder="Email Address"
                {...getFieldProps("email")}
                error={touched.email && errors.email}
              />
              <TextInput
                name="password"
                type="password"
                {...getFieldProps("password")}
                error={touched.password && errors.password}
              />
              {!!errorSignIn && (
                <Alert variant="filled" severity="error" className="mt-2">
                  {errorSignIn}
                </Alert>
              )}

              <Button
                type="submit"
                fullWidth
                color="primary"
                variant="outlined"
                onClick={submitForm}
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
      </Grid>
    </div>
  );
};

export default SignIn;
