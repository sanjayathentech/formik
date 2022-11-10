import { Button, TextField } from "@mui/material";
import React from "react";
import InputField from "./InputField";
import * as Yup from "yup";
import { Form, Formik } from "formik";

function Formikk() {
  const initialvalues = { username: "", password: "" };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("required").email("enter a valid email"),
    password: Yup.string().required("required"),
  });

  return (
    <div>
      <Formik
        initialValues={initialvalues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <InputField name="username" label="username" sx={{ mb: 1 }} />
          <InputField name="password" label="Password" sx={{ mb: 1 }} />

          <Button type="submit">submit</Button>
        </Form>
      </Formik>
    </div>
  );
}

export default Formikk;
