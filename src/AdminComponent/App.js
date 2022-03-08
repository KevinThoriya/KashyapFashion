import * as React from "react";

import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import UserList, { UserCreate, UserEdit } from "./UserList";
import Head from "next/head";
import ReactThemeProvider from "../components/ThemeProvider";
import { theme } from "../components//ThemeProvider";
import { CategoryCreate, CategoryEdit, CategoryList } from "./Category";
import { AddressCreate, AddressEdit, AddressList } from "./Address";
import { ProductCreate, ProductEdit, ProductList } from "./Products";
import {
  UploadImageCreate,
  UploadImageEdit,
  UploadImageList,
} from "./UploadImage";
import { LoginSignup } from "../components/LoginSignupModal";
import authProvider from "./authProvider";
import { useLogin, useNotify, Notification, defaultTheme } from "react-admin";

const Login = (props) => {
  const login = useLogin();
  const admin = (values) => {
    login(values);
  };
  return <LoginSignup {...props} admin={admin} />;
};

const App = () => {
  return (
    <ReactThemeProvider>
      <div className={{}}>
        <Head>
          <title>Admin</title>
        </Head>

        <Admin
          loginPage={Login}
          disableTelemetry
          title="Kashyap Fashion"
          theme={theme}
          dataProvider={simpleRestProvider("http://localhost:3000/admin")}
          authProvider={authProvider}
        >
          <Resource
            name="users"
            list={UserList}
            create={UserCreate}
            edit={UserEdit}
          />
          <Resource
            name="categories"
            list={CategoryList}
            create={CategoryCreate}
            edit={CategoryEdit}
          />
          <Resource
            name="address"
            list={AddressList}
            create={AddressCreate}
            edit={AddressEdit}
          />
          <Resource
            name="products"
            list={ProductList}
            create={ProductCreate}
            edit={ProductEdit}
          />
          <Resource
            name="photos"
            list={UploadImageList}
            create={UploadImageCreate}
            edit={UploadImageEdit}
          />
        </Admin>
      </div>
    </ReactThemeProvider>
  );
};

export default App;
