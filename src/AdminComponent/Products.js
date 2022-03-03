import {
  useListContext,
  TopToolbar,
  CreateButton,
  ExportButton,
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
  ReferenceField,
  SearchInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  Tab,
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import RichTextInput from "ra-input-rich-text";
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

const ProductFilters = [<SearchInput key="title" source="title" alwaysOn />];

export const ProductList = (props) => {
  return (
    <List {...props} actions={<ListActions />} filters={ProductFilters}>
      <Datagrid>
        <TextField source="title" />
        <TextField source="description" />
        <TextField source="neighborhood" />
        <TextField source="city" />
        <TextField source="price" />
        <TextField source="quantity_stock" />
        <ReferenceField
          source="category_id"
          reference="categories"
          label="Category"
        >
          <TextField source="name" />
        </ReferenceField>
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export const ProductCreate = (props) => {
  const classes = useStyles(props);

  return (
    <Create {...props}>
      <SimpleForm>
        <div className="min-w-full min-h-full grid grid-cols-2 gap-y-2 gap-x-5">
          <TextInput source="title" fullWidth validate={required()} />
          <TextInput source="description" fullWidth validate={required()} />
          <TextInput
            source="price"
            type="number"
            fullWidth
            validate={required()}
          />
          <TextInput
            source="quantity_stock"
            type="number"
            fullWidth
            validate={required()}
          />
          <BooleanInput source="tangible" fullWidth />
          <ReferenceInput
            label="Category"
            source="category_id"
            reference="categories"
            fullWidth
          >
            <SelectInput optionText="name" />
          </ReferenceInput>
          <TextInput
            source="weight"
            type="number"
            fullWidth
            validate={required()}
          />
          <TextInput
            source="length"
            type="number"
            fullWidth
            validate={required()}
          />
          <TextInput
            source="height"
            type="number"
            fullWidth
            validate={required()}
          />
          <TextInput
            source="width"
            type="number"
            fullWidth
            validate={required()}
          />
        </div>

        <Tab label="Info about product" className="border bg-slate-400">
          <RichTextInput source="html_body" label="product info" />
        </Tab>
      </SimpleForm>
    </Create>
  );
};

export const ProductEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div className="min-w-full min-h-full grid grid-cols-2 gap-y-2 gap-x-5">
          <TextInput source="title" fullWidth validate={required()} />
          <TextInput source="description" fullWidth validate={required()} />
          <TextInput
            source="price"
            type="number"
            fullWidth
            validate={required()}
          />
          <TextInput
            source="quantity_stock"
            type="number"
            fullWidth
            validate={required()}
          />
          <BooleanInput source="tangible" fullWidth />
          <ReferenceInput
            label="Category"
            source="category_id"
            reference="categories"
            fullWidth
          >
            <SelectInput optionText="name" />
          </ReferenceInput>
          <TextInput
            source="weight"
            type="number"
            fullWidth
            validate={required()}
          />
          <TextInput
            source="length"
            type="number"
            fullWidth
            validate={required()}
          />
          <TextInput
            source="height"
            type="number"
            fullWidth
            validate={required()}
          />
          <TextInput
            source="width"
            type="number"
            fullWidth
            validate={required()}
          />
        </div>
        <RichTextInput source="html_body" />
      </SimpleForm>
    </Edit>
  );
};