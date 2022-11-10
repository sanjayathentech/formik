import { TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";

function InputField({ name, ...additionalprops }) {
  const [field, mata] = useField(name);

  const configfield = {
    ...field,
    ...additionalprops,
    fullWidth: true,
  };

  if (mata && mata.touched && mata.error) {
    configfield.error = true;
    configfield.helperText = mata.error;
  }
  return (
    <>
      <TextField {...configfield} />
    </>
  );
}

export default InputField;
