import React from 'react'
import { Datagrid, List, TextField } from 'react-admin';
const UserList = (props) => {
  return (
      <List {...props}>
          <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
                <TextField source="email" />
            </Datagrid>
      </List>
  )
}

export default UserList;