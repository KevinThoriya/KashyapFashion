import {
  SearchInput as RaSearchInput,
  TextInput as RaTextInput,
} from "react-admin";

export const TextInput = (props) => (
  <RaTextInput {...props} variant="outlined" />
);

export const SearchInput = (props) => (
  <RaSearchInput {...props} variant="outlined" />
);
