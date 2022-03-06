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
    <Card style={{ width: 300, height: 400, marginTop: 30 }}>
      <CardHeader
        style={{ background: "#3a393a", borderBottom: "1px solid #292929" }}
        title={
          <Typography align='center' style={{ color: "#fff" }}>
            {heroName}
          </Typography>
        }
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Box style={{ marginTop: 25 }}>
          <img
            style={{ width: 230, borderRadius: 3 }}
            src={heroImgUrl}
            alt='hero'
          />
        </Box>
      </div>

      <CardContent style={{}}>
        <Grid container>
          <Grid item xs={6}>
            <Typography>Attribute: </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography> {primaryAttribute}</Typography>
          </Grid>
        </Grid>

        <Grid
          container
          style={{
            border: "1px solid",
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
                      border: "1px solid",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    item
                    xs={6}
                  >
                    {role}
                  </Grid>
                );
              } else {
                return (
                  <Grid
                    style={{
                      border: "1px solid",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    item
                    xs={12}
                  >
                    {role}
                  </Grid>
                );
              }
            } else {
              return (
                <Grid
                  style={{
                    border: "1px solid",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  item
                  xs={6}
                >
                  {role}
                </Grid>
              );
            }
          })}
        </Grid>
      </CardContent>
    </Card>
  );
}
