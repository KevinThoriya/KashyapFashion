import React from "react";
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
} from "react-admin";
import IconEvent from "@material-ui/icons/Event";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Styles } from "@material-ui/styles/withStyles";
import { useLocation } from "react-router";

export const styles = {
  twoCol: { width: "100%" },
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

const UploadImageFilters = [];

export const UploadImageList = (props) => {
  return (
    <List {...props} actions={<ListActions />} filters={UploadImageFilters}>
      <Datagrid>
        <TextField source="url" />
        <TextField source="filename" />
        <ReferenceField
          source="product_id"
          reference="products"
          label="Product"
        >
          <TextField source="title" />
        </ReferenceField>
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export const UploadImageCreate = (props) => {
  const classes = useStyles(props);

  const location = useLocation();
  const product_id = (location.search || "").replace("?", "");
  console.debug("default product", product_id);
  const redirect = product_id ? `/products/${product_id}` : false;

  return (
    <Create {...props}>
      <SimpleForm initialValues={{ product_id }} redirect={redirect}>
        <div className="min-w-full min-h-full grid grid-cols-2 gap-y-2 gap-x-5">
          <TextInput fullWidth source="url" validate={required()} />
          <TextInput source="filename" />
          <ReferenceInput
            label="product"
            source="product_id"
            reference="products"
            fullWidth
          >
            <SelectInput optionText="title" />
          </ReferenceInput>
        </div>
      </SimpleForm>
    </Create>
  );
};

export const UploadImageEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div className="min-w-full min-h-full grid grid-cols-2 gap-y-2 gap-x-5">
          <TextInput fullWidth source="url" validate={required()} />
          <TextInput source="filename" />
          <ReferenceInput
            label="product"
            source="product_id"
            reference="products"
          >
            <SelectInput optionText="title" />
          </ReferenceInput>
        </div>
      </SimpleForm>
    </Edit>
  );
};
