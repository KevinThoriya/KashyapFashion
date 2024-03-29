import React from "react";
import { TextInput, SearchInput } from "./Fields";
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
  SimpleForm,
  Edit,
  List,
  TextField,
  required,
  EditButton,
  DeleteButton,
  EmailField,
  email,
} from "react-admin";
import IconEvent from "@material-ui/icons/Event";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Styles } from "@material-ui/styles/withStyles";

export const styles = {
  first_name: { display: "inline-block" },
  last_name: { display: "inline-block", marginLeft: 32 },
  email: { width: 544 },
  address: { maxWidth: 544 },
  zipcode: { display: "inline-block" },
  city: { display: "inline-block", marginLeft: 32 },
  comment: {
    maxWidth: "20em",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  password: { display: "inline-block" },
  confirm_password: { display: "inline-block", marginLeft: 32 },
};
const useStyles = makeStyles(styles);

const ListActions = (props) => {
  const { className, maxResults, ...rest } = props;
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
  <SearchInput
    source="name"
    key={"name"}
    InputProps={{ label: "search name", placeholder: "type name..." }}
    alwaysOn
  />,
  <SearchInput
    source="email"
    key={"email"}
    InputProps={{ label: "search email", placeholder: "type email..." }}
    alwaysOn
  />,
];

const UserList = (props) => {
  return (
    <List {...props} actions={<ListActions />} filters={userFilters}>
      <Datagrid>
        <TextField source="name" />
        <TextField source="email" />
        <TextField source="mobile" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export const UserCreate = (props) => {
  const classes = useStyles(props);

  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          formClassName={classes.email}
          source="name"
          validate={required()}
        />
        <TextInput
          formClassName={classes.email}
          source="email"
          validate={[email(), required()]}
        />
        <TextInput source="mobile" validate={required()} />
        <TextInput source="password" validate={required()} type="password" />
        {/* <RichTextInput source="bio" />
      <DateInput label="Publication date" source="published_at" defaultValue={new Date()} /> */}
      </SimpleForm>
    </Create>
  );
};

export const UserEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" validate={required()} />
        <EmailField
          fullWidth
          disabled
          source="email"
          label="Email Address"
          validate={[email(), required()]}
        />
        <TextInput
          fullWidth
          source="mobile"
          label="Mobile No."
          validate={required()}
        />
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
  );
};

export default UserList;
