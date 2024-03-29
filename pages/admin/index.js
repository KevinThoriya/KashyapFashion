import * as React from "react";

import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import UserList from "../../src/AdminComponent/UserList";
import Head from "next/head";
import ReactThemeProvider from "../../src/components/ThemeProvider";
import dynamic from "next/dynamic";
import { Providers } from "..";
const App = dynamic(() => import("../../src/AdminComponent/App"), {
  ssr: false,
});

// const authProvider = {
//     login: params => Promise.resolve(),
//     logout: params => Promise.resolve(),
//     checkAuth: params => Promise.resolve(),
//     checkError: error => Promise.resolve(),
//     getPermissions: params => Promise.resolve(),
// };

const AdminPage = () => (
  <>
    <div className={{}}>
      <Head>
        <title>admin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={{}}>
        <App />
      </main>
    </div>
  </>
);

export default AdminPage;
