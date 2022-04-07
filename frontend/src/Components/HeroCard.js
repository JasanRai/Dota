import * as React from "react";

import {
  CardMedia, 
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@mui/material";

export default function HeroCard(props) {
  const { heroName, heroImgUrl, primaryAttribute, roles } = props;
  return (
    <Card
      style={{
        width: 300,
        height: 420,
        marginTop: 30,
        background: "rgba(200, 155, 123, 0.9)",
      }}
    >
      <CardHeader
        style={{ background: "#3a393a", borderBottom: "1px solid #292929" }}
        title={
          <Typography align="center" style={{ color: "#fff" }}>
            {heroName}
          </Typography>
        }
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Box style={{ marginTop: 25 }}>
          <img
            style={{ width: "100%", borderRadius: 3 }}
            src={heroImgUrl}
            alt="hero"
          />
        </Box>
      </div>

      <CardContent style={{ margin: 0 }}>
        <Typography
          style={{
            color: "#fff",
            fontFamily: "initial",
            fontWeight: "bold",
            textDecoration: "underline",

            display: "flex",
            justifyContent: "center",
          }}
        >
          Attribute
        </Typography>
        <Typography
          style={{
            fontFamily: "cursive",
            color: "#fff",
            fontWeight: "bold",
            textTransform: "capitalize",

            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          {primaryAttribute}
        </Typography>

        <Typography
          style={{
            color: "#fff",
            fontFamily: "initial",
            fontWeight: "bold",
            textDecoration: "underline",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Roles:{" "}
        </Typography>

        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {roles.map((role, index) => {
            if (index === roles.length - 1) {
              if ((index + 1) % 2 === 0) {
                return (
                  <Grid
                    style={{
                      border: "2px solid",
                      borderRadius: 6,
                      borderColor: "#000",
                      marginTop: 2,
                      display: "flex",
                      justifyContent: "center",
                      fontFamily: "monospace",
                      fontWeight: "bold",
                    }}
                    item
                    xs={6}
                  >
                    <Typography style={{ color: "#fff" }}>{role}</Typography>
                  </Grid>
                );
              } else {
                return (
                  <Grid
                    style={{
                      border: "2px solid",
                      borderRadius: 6,
                      borderColor: "#000",
                      display: "flex",
                      justifyContent: "center",
                      fontFamily: "monospace",
                      fontWeight: "bold",
                      marginTop: 2,
                    }}
                    item
                    xs={12}
                  >
                    <Typography style={{ color: "#fff" }}>{role}</Typography>
                  </Grid>
                );
              }
            } else {
              return (
                <Grid
                  style={{
                    border: "2px solid",
                    borderRadius: 6,
                    borderColor: "#000",
                    display: "flex",
                    justifyContent: "center",
                    fontFamily: "monospace",
                    fontWeight: "bold",
                    marginTop: 2,
                  }}
                  item
                  xs={6}
                >
                  <Typography style={{ color: "#fff" }}>{role}</Typography>
                </Grid>
              );
            }
          })}
        </Grid>
      </CardContent>
    </Card>
  );
}
