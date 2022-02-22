
import * as React from "react";

import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import UserList from './UserList';
import Head from "next/head";
import ReactThemeProvider from '../components/ThemeProvider'
import dynamic from "next/dynamic"
import { useDataProvider } from "@ra-data-prisma/dataprovider"






const App = () => {

  return (
    <ReactThemeProvider>
      <div className={{}}>
        <Head>
          <title>Search for best sarees</title>
        </Head>

        <Admin >
            <Resource name="users" list={UserList} />
        </Admin>
      </div>
    </ReactThemeProvider>
    
);
}

export default App;