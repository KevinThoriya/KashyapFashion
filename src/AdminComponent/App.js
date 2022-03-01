
import * as React from "react";

import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import UserList, { UserCreate, UserEdit } from './UserList';
import Head from "next/head";
import ReactThemeProvider from '../components/ThemeProvider'
import { theme } from '../components//ThemeProvider';

const App = () => {

  return (
    <ReactThemeProvider>
      <div className={{}}>
        <Head>
          <title>Search for best sarees</title>
        </Head>

        <Admin disableTelemetry title="Kashyap Fashion"  theme={theme} dataProvider={simpleRestProvider('http://localhost:3000/admin')} >
          {/* <Resource name="users" list={UserList} /> */}
          
          <Resource name="users" list={UserList} create={UserCreate} edit={UserEdit} />
        </Admin>
      </div>
    </ReactThemeProvider>
    
);
}

export default App;