import React from "react";
import { TextInput } from "./Fields";
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
  ReferenceField,
  SearchInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import IconEvent from "@material-ui/icons/Event";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Styles } from "@material-ui/styles/withStyles";

export const styles = {
  name: { display: "inline-block", marginLeft: 32 },
};
const useStyles = makeStyles(styles);

const ListActions = (props) => {
  const { className, maxResults, ...rest } = props;
  const { total } = useListContext();

  return (
    <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
      <CreateButton />
      <ExportButton disabled={total === 0} maxResults={maxResults} />
    </TopToolbar>
  );
};

const categoryFilters = [
  <SearchInput
    key="name"
    InputProps={{ placeholder: "type name ...." }}
    source="name"
    alwaysOn
  />,
];

export const CategoryList = (props) => {
  return (
    <List {...props} actions={<ListActions />} filters={categoryFilters}>
      <Datagrid>
        <TextField source="name" />
        <ReferenceField
          source="parent_id"
          reference="categories"
          label="Parent Category"
        >
          <TextField source="name" />
        </ReferenceField>
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export const CategoryCreate = (props) => {
  const classes = useStyles(props);

  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          formClassName={classes.email}
          source="name"
          validate={required()}
        />
        <ReferenceInput
          label="Parent Category"
          source="parent_id"
          reference="categories"
          allowEmpty
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export const CategoryEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" validate={required()} />
        <ReferenceInput
          label="Parent Category"
          source="parent_id"
          reference="categories"
          allowEmpty
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
