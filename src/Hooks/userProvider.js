import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import * as React from "react";
import { useState } from "react";
import { Button } from "@material-ui/core";
import InputModal from "../components/InputModal";
import axiosApi from "../axiosApi";
import jwt from "jsonwebtoken";
import Routes from "../components/Routes";
import { useSnackbar } from "notistack";
export const UserContext = React.createContext(null);

export const UserContextProvider = ({ children }) => {
  const [UserState, setUserState] = useState({});
  const [getToken, setToken] = useState("");

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setToken(token);
  }, []);

  React.useEffect(() => {
    if (getToken.length > 0) {
      localStorage.setItem("token", getToken);
      axiosApi.defaults.headers.authorization = "Bearer " + getToken;
      if (!UserState?.user) fetchUser();
    }
  }, [UserState?.user, fetchUser, getToken]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchUser() {
    try {
      const tokenPayload = jwt.decode(getToken);
      const response = await axiosApi.get("/users/" + tokenPayload.id);
      setUserState({
        user: response.data,
        token: getToken,
      });
    } catch (error) {
      console.log(error);
      axiosApi.defaults.headers.authorization = undefined;
      localStorage.removeItem("token");
      setUserState({});
    }
  }

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const onSuccess = (res, callback) => {
    setUserState({ ...res, ...UserState });
    enqueueSnackbar(`Successfully signed in as ${res.user.name}`, {
      variant: "success",
    });
    callback(res);
  };
  const onError = (data, callback) => {
    enqueueSnackbar(data?.message, { variant: "error" });
    callback(data);
  };

  const login = (values, onS, onE) => {
    axiosApi
      .post(Routes.SignIn, values)
      .then((res) => onSuccess(res.data, onS))
      .catch((error) => {
        console.log(error);
        onError(error.response?.data, onE);
      });
  };

  return (
    <UserContext.Provider
      value={{
        ...UserState,
        login,
        setUserState: (state) => {
          if (state?.token) setToken(state?.token);
          setUserState({ ...UserState, ...state });
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
