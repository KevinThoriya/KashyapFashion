import { TextInput } from "./Fields";
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
  required,
  EditButton,
  TextField,
  DeleteButton,
  ReferenceField,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
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

const SizeFilters = [];

export const SizeList = (props) => {
  return (
    <List {...props} actions={<ListActions />} filters={SizeFilters}>
      <Datagrid>
        <TextField source="name" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export const SizeCreate = (props) => {
  const classes = useStyles(props);

  const location = useLocation();
  const product_id = (location.search || "").replace("?", "");
  console.debug("default product", product_id);
  const redirect = product_id ? `/products/${product_id}` : false;

  return (
    <Create {...props}>
      <SimpleForm initialValues={{ product_id }} redirect={redirect}>
        <div className="min-w-full min-h-full grid grid-cols-2 gap-y-2 gap-x-5">
          <TextInput fullWidth source="name" validate={required()} />
        </div>
      </SimpleForm>
    </Create>
  );
};

export const SizeEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput fullWidth source="name" validate={required()} />
      </SimpleForm>
    </Edit>
  );
};
