import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import LoginForm from "./LoginForm";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./Auth";
import { Grid } from "@mui/material";

export default function Navbar() {
  // const auth = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <CssBaseline />
      <AppBar style={{ background: "rgba(126,30,35, 0.8)" }} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dota
          </Typography>
          <Grid container marginLeft={40}>
            <Grid item xs={3} display={"flex"} justifyContent={"end"}>
              <NavLink to="/">
                <Typography>Home</Typography>
              </NavLink>
            </Grid>
            <Grid item xs={3} display={"flex"} justifyContent={"center"}>
              <NavLink to="/heroes">
                <Typography>Heroes</Typography>
              </NavLink>
            </Grid>
            <Grid item xs={3} display={"flex"} justifyContent={"start"}>
              <NavLink to="/items">
                <Typography>Items</Typography>
              </NavLink>
            </Grid>
          </Grid>
          {/* {!auth.user && (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
          {auth.user && (
            <Button
              color="inherit"
              onClick={auth.logout}
              component={Link}
              to="/"
            >
              sign out
            </Button>
          )} */}
        </Toolbar>
      </AppBar>
    </>
  );
}
