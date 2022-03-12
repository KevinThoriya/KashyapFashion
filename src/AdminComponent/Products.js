import { TextInput, SearchInput } from "./Fields";
import {
  useListContext,
  TopToolbar,
  CreateButton,
  ExportButton,
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
  ReferenceField,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  Tab,
  ImageInput,
  ImageField,
  ArrayInput,
  SimpleFormIterator,
  ReferenceArrayInput,
  AutocompleteInput,
  ReferenceManyField,
  Button,
  SelectArrayInput,
} from "react-admin";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import RichTextInput from "ra-input-rich-text";
import { CameraAltOutlined } from "@mui/icons-material";
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

const ProductFilters = [
  <SearchInput
    InputProps={{
      label: "search Product name",
      placeholder: "type Product name...",
    }}
    key="title"
    source="title"
    alwaysOn
  />,
  <SearchInput
    InputProps={{
      placeholder: "search by keyword...",
    }}
    key="html_body"
    source="html_body"
    alwaysOn
  />,
  <ReferenceInput source="category_id" key="categories" reference="categories">
    <AutocompleteInput optionText="name" />
  </ReferenceInput>,
];

export const ProductList = (props) => {
  return (
    <List {...props} filters={ProductFilters}>
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
      <SimpleForm variant="standard">
        <div className="min-w-full min-h-full grid grid-cols-2 gap-y-2 gap-x-5">
          <TextInput source="title" fullWidth validate={required()} />
          <ReferenceInput
            label="Category"
            source="category_id"
            reference="categories"
            fullWidth
          >
            <AutocompleteInput optionText="name" />
          </ReferenceInput>
          <TextInput
            source="price"
            type="number"
            fullWidth
            validate={required()}
            variant="outlined"
          />
          <TextInput
            source="quantity_stock"
            type="number"
            fullWidth
            validate={required()}
          />
        </div>

        <ReferenceArrayInput source="size_ids" reference="sizes">
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>

        <TextInput
          multiline
          source="description"
          fullWidth
          validate={required()}
        />

        <Tab label="Info about product" className="border bg-slate-400">
          <RichTextInput source="html_body" label="product info" />
        </Tab>

        <ReferenceManyField
          reference="photos"
          target="product_id"
          label="Product Images"
          basePath="photos"
        >
          <Datagrid>
            <ImageField source="url" label="image" />
            <TextField source="filename" />
            <EditButton />
            <DeleteButton />
          </Datagrid>
        </ReferenceManyField>

        <Button
          variant="text"
          component={Link}
          to={{
            pathname: "/photos/create",
            search: props.id,
          }}
          label="Add Image"
        >
          <CameraAltOutlined />
        </Button>
      </SimpleForm>
    </Create>
  );
};

export const ProductEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm variant="standard">
        <div className="min-w-full min-h-full grid grid-cols-2 gap-y-2 gap-x-5">
          <TextInput source="title" fullWidth validate={required()} />
          <ReferenceInput
            label="Category"
            source="category_id"
            reference="categories"
            fullWidth
          >
            <AutocompleteInput optionText="name" />
          </ReferenceInput>
          <TextInput
            source="price"
            type="number"
            fullWidth
            validate={required()}
            variant="outlined"
          />
          <TextInput
            source="quantity_stock"
            type="number"
            fullWidth
            validate={required()}
          />
        </div>

        <ReferenceManyField
          source="size_ids"
          basePath="sizes"
          label="Product Images"
          resource="sizes"
          reference="sizes"
          target="product_ids"
        >
          <Datagrid>
            <TextField source="name" />
          </Datagrid>

          {/* <SelectArrayInput label="as" optionText="name" /> */}
        </ReferenceManyField>

        <TextInput
          multiline
          source="description"
          fullWidth
          validate={required()}
        />

        <Tab label="Info about product" className="border bg-slate-400">
          <RichTextInput source="html_body" label="product info" />
        </Tab>

        <ReferenceManyField
          reference="photos"
          target="product_id"
          label="Product Images"
          basePath="photos"
        >
          <Datagrid>
            <ImageField source="url" label="image" />
            <TextField source="filename" />
            <EditButton />
            <DeleteButton />
          </Datagrid>
        </ReferenceManyField>

        <Button
          variant="text"
          component={Link}
          to={{
            pathname: "/photos/create",
            search: props.id,
          }}
          label="Add Image"
        >
          <CameraAltOutlined />
        </Button>
      </SimpleForm>
    </Edit>
  );
};
