import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

function ItemCard(props) {
  const { itemName, itemCost, itemImg } = props;
  return (
    <div>
      <Card
        style={{
          borderRadius: 10,
          width: 200,
          marginTop: 5,
          border: "2px solid",
          borderColor: "#000",
          background: "rgba(181,70,65,0.9)",
        }}
      >
        <CardMedia
          style={{ display: "flex", justifyContent: "center", marginTop: 10 }}
        >
          <img
            style={{ width: 90 }}
            src={itemImg}
            alt="hero"
            crossOrigin="anonymous"
          />
        </CardMedia>
        <CardContent>
          <Typography
            style={{
              display: "flex",
              justifyContent: "center",
              color: "#fff",
              fontFamily: "initial",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Item Name
          </Typography>
          <Typography
            style={{
              display: "flex",
              justifyContent: "center",
              color: "#fff",
              fontFamily: "cursive",
            }}
          >
            {itemName}
          </Typography>
          <Typography
            style={{
              display: "flex",
              justifyContent: "center",
              color: "#fff",
              fontFamily: "initial",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Description
          </Typography>
          <Typography
            style={{
              display: "flex",
              justifyContent: "center",
              color: "#fff",
              fontSize: 14,
              fontFamily: "revert",
            }}
          >
            Cost: {itemCost}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default ItemCard;
