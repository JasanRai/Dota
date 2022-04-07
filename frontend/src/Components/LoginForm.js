import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { Button, TextField } from "@mui/material";
import { object, string } from "yup";
import axios from "axios";
// import { AuthProvider, useAuth } from "./Auth";
import { NavigationType, useLocation, useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

function LoginForm() {
  const [user, setUser] = useState();
  // const auth = useAuth();
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  const handleSubmit = async (values, formikHelpers) => {
    const data = {
      email: values.email,
      password: values.password,
    };
    const axiosConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios
      .post("http://localhost:5001/loginUsers", data, axiosConfig)
      .then((response) => {
        // auth.login(data.email);

        localStorage.setItem("user", data.email);
      });
    navigate("/heroes");
  };

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
        onSubmit={handleSubmit}
        validationSchema={object({
          email: string().required("Please enter ").email("Invalid email"),
          password: string().required("Please enter your password"),
        })}
      >
        {({ errors, isValid, touched }) => (
          <Form
            method="POST"
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fff",
              padding: 20,
              minWidth: 300,
              borderRadius: 5,
            }}
          >
            <Field
              name="email"
              type="email"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Email"
              // onChange={(e) => setUser(e.target.value)}
              // value={user}
              fullWidth
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
            />
            <Button
              type="submit"
              style={{
                marginTop: 20,
                display: "flex",
                justifyContent: "center",
                border: "2px solid",
                borderColor: "#32b4c3",
                backgroundColor: "#53c6d3",
                color: "#fefefe",
              }}
            >
              SIGN IN
            </Button>
            <Button
              style={{
                marginTop: 20,
                display: "flex",
                justifyContent: "center",
                border: "2px solid",
                borderColor: "#32b4c3",
                backgroundColor: "#53c6d3",
                color: "#fefefe",
              }}
              onClick={handleRegister}
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
