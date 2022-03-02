import React from 'react'
import {
  useListContext,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  Button,
  sanitizeListRestProps,
  Datagrid,
  Create,
  TextInput,
  SimpleForm,
  Edit,
  List,
  TextField,
  required,
  EditButton,
  DeleteButton,
  EmailField,
  ReferenceField,
  SearchInput,
  ReferenceInput,
  SelectInput,
} from 'react-admin'
import IconEvent from '@material-ui/icons/Event'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Styles } from '@material-ui/styles/withStyles'

export const styles = {
  twoCol: { width: '100%' },
}
const useStyles = makeStyles(styles)

const ListActions = (props) => {
  const { className, maxResults, ...rest } = props
  const { total } = useListContext()

  return (
    <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
      <CreateButton />
      <ExportButton disabled={total === 0} maxResults={maxResults} />
    </TopToolbar>
  )
}

const AddressFilters = [<SearchInput source="name" alwaysOn />]

export const AddressList = (props) => {
  return (
    <List {...props} actions={<ListActions />} filters={AddressFilters}>
      <Datagrid>
        <TextField source="street" />
        <TextField source="number" />
        <TextField source="neighborhood" />
        <TextField source="city" />
        <TextField source="state" />
        <TextField source="zipcode" />
        <ReferenceField source="user_id" reference="users" label="Customer">
          <TextField source="name" />
        </ReferenceField>
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  )
}

export const AddressCreate = (props) => {
  const classes = useStyles(props)

  return (
    <Create {...props}>
      <SimpleForm>
        <div className="min-w-full min-h-full grid grid-cols-2 gap-y-2 gap-x-5">
          <TextInput fullWidth source="street" validate={required()} />
          <TextInput fullWidth source="number" validate={required()} />
          <TextInput fullWidth source="neighborhood" validate={required()} />
          <TextInput fullWidth source="city" validate={required()} />
          <TextInput fullWidth source="state" validate={required()} />
          <TextInput fullWidth source="zipcode" validate={required()} />
          <ReferenceInput
            label="Customer"
            source="user_id"
            reference="users"
            fullWidth
          >
            <SelectInput optionText="name" />
          </ReferenceInput>
        </div>
      </SimpleForm>
    </Create>
  )
}

export const AddressEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div className="min-w-full min-h-full grid grid-cols-2 gap-y-2 gap-x-5">
          <TextInput fullWidth source="street" validate={required()} />
          <TextInput fullWidth source="number" validate={required()} />
          <TextInput fullWidth source="neighborhood" validate={required()} />
          <TextInput fullWidth source="city" validate={required()} />
          <TextInput fullWidth source="state" validate={required()} />
          <TextInput fullWidth source="zipcode" validate={required()} />
          <ReferenceInput label="Customer" source="user_id" reference="users">
            <SelectInput optionText="name" />
          </ReferenceInput>
        </div>
      </SimpleForm>
    </Edit>
  )
}
