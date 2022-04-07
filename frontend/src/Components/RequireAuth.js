import axios from "axios";
import { isEmptyArray } from "formik";
import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate, Route } from "react-router-dom";
// import { useAuth } from "./Auth";

export const RequireAuth = ({ children }) => {
  const [isValidUser, setIsValidUser] = useState(false);
  console.log(isValidUser);
  console.log(children);

  const redirectToPage = (page) => {
    return page;
  };

  useEffect(() => {
    const user = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: localStorage.getItem("user") }),
    };
    fetch("http://localhost:5001/checkUser", user)
      .then(async (res) => await res.json())
      .then(
        (res) => {
          console.log(res);
          redirectToPage(children);
        }

        // {
        //   if (localStorage.getItem("user") === res) {
        //     return setIsValidUser(!isValidUser);
        //   }
        // }
      );
  }, []);

  //instead of localstorage, check should be isValidUser
  if (!isValidUser) {
    return <Navigate to="/login" />;
  }

  return children;
};

//check localstorage and check with backend data

//get "user" from localStorage
//send to backend
//check if user exists in database
//if user exist, send signal to frontend
//set state variable to true
