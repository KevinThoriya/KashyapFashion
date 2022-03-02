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
  SearchInput,

} from 'react-admin';
import IconEvent from '@material-ui/icons/Event';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles/withStyles';

export const styles = {
    first_name: { display: 'inline-block' },
    last_name: { display: 'inline-block', marginLeft: 32 },
    email: { width: 544 },
    address: { maxWidth: 544 },
    zipcode: { display: 'inline-block' },
    city: { display: 'inline-block', marginLeft: 32 },
    comment: {
        maxWidth: '20em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    password: { display: 'inline-block' },
    confirm_password: { display: 'inline-block', marginLeft: 32 },
};
const useStyles = makeStyles(styles);

const ListActions = (props) => {
    const {
        className,
        maxResults,
        ...rest
    } = props;
    const { total } = useListContext();

    return (
        <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
            {/* <FilterButton /> */}
            <CreateButton />
            <ExportButton disabled={total === 0} maxResults={maxResults} />
            {/* Add custom actions */}
            {/* <Button
                onClick={() => { alert('Your custom action'); }}
                label="Show calendar"
            >
                <IconEvent />
            </Button> */}
        </TopToolbar>
    );
};

const userFilters = [
    // <SearchInput source="q" alwaysOn />,
  <SearchInput label="Search FirstName" source="firstname" />,
  <SearchInput label="Search Email" source="email" alwaysOn autoComplete />,
];

const UserList = (props) => {
  return (
      <List {...props} actions={<ListActions/>} filters={userFilters}>
          <Datagrid>
              <TextField source="firstname" />
              <TextField source="lastname" />
                <TextField source="email" />
        <TextField source="mobile" />
        <EditButton />
        <DeleteButton />
            </Datagrid>
      </List>
  )
}

export const UserCreate = (props) => {
  const classes = useStyles(props);

  return <Create {...props}>
  <SimpleForm>
      <TextInput formClassName={classes.first_name} source="firstname" validate={required()} />
      <TextInput formClassName={classes.last_name} source="lastname" validate={required()} />
      <TextInput formClassName={classes.email} source="email" validate={required()} />
      <TextInput source="mobile" validate={required()} />
          <TextInput InputProps={{ label: 'Password'}} source="password_hash" validate={required()} type="password" />
      {/* <RichTextInput source="bio" />
      <DateInput label="Publication date" source="published_at" defaultValue={new Date()} /> */}
  </SimpleForm>
</Create>
}

export const UserEdit = (props) => {
  return <Edit {...props}>
  <SimpleForm>
      <TextInput  label="First Name" source="firstname"  validate={required()}/>
      <TextInput  source="lastname" label="Last Name" validate={required()} />
      <EmailField fullWidth disabled source="email" label="Email Address" validate={required()} />
      <TextInput fullWidth source="mobile" label="Mobile No." validate={required()} />
      {/* <DateInput label="Publication date" source="published_at" /> */}
      {/* <ReferenceManyField label="Comments" reference="comments" target="post_id">
          <Datagrid>
              <TextField source="body" />
              <DateField source="created_at" />
              <EditButton />
          </Datagrid>
      </ReferenceManyField> */}
  </SimpleForm>
</Edit>
}


export default UserList;