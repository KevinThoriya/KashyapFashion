
import * as React from "react";

import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import UserList from './UserList';
import Head from "next/head";
import ReactThemeProvider from '../components/ThemeProvider'
import dynamic from "next/dynamic"
import { useDataProvider } from "@ra-data-prisma/dataprovider"
import { theme } from '../components//ThemeProvider';





const App = () => {

  return (
    <ReactThemeProvider>
      <div className={{}}>
        <Head>
          <title>Search for best sarees</title>
        </Head>

        <Admin theme={theme} dataProvider={simpleRestProvider('http://localhost:3000/api/homepage')} >
          {/* <Resource name="users" list={UserList} /> */}
          
          <Resource name="trending" list={UserList} />
        </Admin>
      </div>
    </ReactThemeProvider>
    
);
}

export default App;