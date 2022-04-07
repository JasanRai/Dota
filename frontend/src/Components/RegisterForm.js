import { Button, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { object, string } from "yup";
import axios from "axios";

const initialValues = {
  email: "",
  firstName: "",
  surname: "",
  password: "",
};

function RegisterForm() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(144,186,238,1)",
      }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, formikHelpers) => {
          console.log(values);

          const data = {
            firstName: values.firstName,
            surname: values.surname,
            email: values.email,
            password: values.password,
          };
          const axiosConfig = {
            headers: {
              "Content-Type": "application/json",
            },
          };

          await axios
            .post("http://localhost:5001/registeredUsers", data, axiosConfig)
            .then((response) => {
              return response.data;
            });
        }}
        validationSchema={object({
          email: string().required("Please enter email").email("Invalid email"),
          password: string()
            .required("Please enter your password")
            .min(6, "Password needs to be at least 6 Characters"),
          firstName: string().required("Please enter first name"),
          surname: string().required("Please enter your surname"),
        })}
      >
        {({ errors, isValid, touched, dirty }) => (
          <Form
            method="POST"
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fff",
              padding: 20,
              minWidth: 400,
              borderRadius: 5,
            }}
          >
            <Field
              name="firstName"
              type="firstName"
              as={TextField}
              variant="outlined"
              color="primary"
              label="First Name"
              fullWidth
              error={Boolean(errors.firstName) && Boolean(touched.firstName)}
              helperText={Boolean(touched.firstName) && errors.firstName}
            />
            <Field
              name="surname"
              type="surname"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Surname"
              style={{ marginTop: 20 }}
              fullWidth
              error={Boolean(errors.surname) && Boolean(touched.surname)}
              helperText={Boolean(touched.surname) && errors.surname}
            />
            <Field
              name="email"
              type="email"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Email"
              style={{ marginTop: 20 }}
              fullWidth
              error={Boolean(errors.email) && Boolean(touched.email)}
              helperText={Boolean(touched.email) && errors.email}
            />
            <Field
              name="password"
              as={TextField}
              variant="outlined"
              color="primary"
              type="password"
              label="Password"
              style={{ marginTop: 20 }}
              fullWidth
              error={Boolean(errors.password) && Boolean(touched.password)}
              helperText={Boolean(touched.password) && errors.password}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              style={{
                marginTop: 20,
                //   display: "flex",
                //   justifyContent: "center",
                //   border: "2px solid",
                //   borderColor: "#32b4c3",
                //   backgroundColor: "#53c6d3",
                //   color: "#fefefe",
              }}
              disabled={!dirty || !isValid}
            >
              REGISTER
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterForm;
