import React from "react";
import { TextField } from "@mui/material";

export default function TextInput(props) {
  const { error, name, placeholder = false, ...rest } = props;
  return (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        id={name}
        label={placeholder || name}
        name={name}
        autoComplete={name}
        error={!!error}
        {...rest}
      />
      {!!error && <p className="text-red-700">{error}</p>}
    </>
  );
}
