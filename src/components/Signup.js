import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import * as Yup from "yup";

import {
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import TextInput from "./TextInput";
import axios from "axios";
import Routes from "./Routes";
import { useSnackbar } from "notistack";

const SignUpValidationSchema = Yup.object().shape({
  email: Yup.string().email().required("Required"),
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  mobile: Yup.number().required("Required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "minimum 4 letter required."),
  ConfirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const SignUp = ({ onSignIn, closeModal }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const onSuccess = (res) => { 
    let userData = res.payload;
    enqueueSnackbar(res.message, {variant: 'success'});
    console.log(userData);
    closeModal();
  }

  const onError = (data) => { 
    enqueueSnackbar(data.message, { variant: 'error' });
    console.log("error payload",data.payload);
  }


  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      mobile: "",
      password: "",
      ConfirmPassword: "",
    },
    validationSchema: SignUpValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      const res = await axios.post(Routes.SignUp, {
        firstname: values.firstName,
        lastname: values.lastName,
        email: values.email,
        password_hash: values.password,
        mobile: values.mobile,
      });
      if (res.data.status == 200) return onSuccess(res.data);
      else if (res.data.status == 400) return onError(res.data);
    },
  });

  const { values, getFieldProps, errors, touched, submitForm } = formik;

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
                placeholder="First Name"
                name="firstName"
                {...getFieldProps("firstName")}
                error={touched.firstName && errors.firstName}
              />
              <TextInput
                placeholder="Last Name"
                name="lastName"
                {...getFieldProps("lastName")}
                error={touched.lastName && errors.lastName}
              />
              <TextInput
                type="number"
                min={10}
                max={10}
                name="mobile"
                {...getFieldProps("mobile")}
                error={touched.mobile && errors.mobile}
              />
              <TextInput
                name="password"
                type="password"
                {...getFieldProps("password")}
                error={touched.password && errors.password}
              />
              <TextInput
                placeholder="Confirm Password"
                type="password"
                name="ConfirmPassword"
                {...getFieldProps("ConfirmPassword")}
                error={touched.ConfirmPassword && errors.ConfirmPassword}
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
                onClick={submitForm}
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
export default SignUp;
