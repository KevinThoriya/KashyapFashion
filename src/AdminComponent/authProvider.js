/* eslint-disable import/no-anonymous-default-export */
import axiosApi from "../axiosApi.js";
import Routes from "../components/Routes";
import jwt from "jsonwebtoken";

const login = (values) => {
  return axiosApi.post(Routes.SignIn, values).then((res) => {
    localStorage.setItem("username", res.data.user.name);
    let token = res.data.token;
    localStorage.setItem("token", token);
    axiosApi.defaults.headers.authorization = "Bearer " + token;
  });
};

let authProvider = {
  // called when the user attempts to log in
  login,
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem("username");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    const token = localStorage.getItem("token");
    const tokenPayload = jwt.decode(token);
    return axiosApi.get("/users/" + tokenPayload.id).then((res) => {
      localStorage.setItem("username", res.data.name);
    });
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
  getIdentity: () => {
    const token = localStorage.getItem("token");
    const tokenPayload = jwt.decode(token);
    return axiosApi.get("/users/" + tokenPayload.id).then((res) => {
      return {
        avatar: null,
        fullName: res.data.name,
        ...res.data,
      };
    });
  },
};

export default authProvider;
