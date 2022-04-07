import { CssBaseline, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ItemCard from "../Components/ItemCard";
import itemBackground from "../Images/dotaitembg.jpeg";

function Items() {
  const [items, setItems] = useState([]);
  console.log(items);

  useEffect(() => {
    fetch("http://localhost:5001/item-data")
      .then((res) => res.json())
      .then((items) => setItems(items));
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${itemBackground})`,
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
      }}
    >
      <div>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#fff",
            fontFamily: "cursive",
            marginTop: 0,
            paddingTop: 10,
          }}
        >
          ITEMS
        </h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Grid container style={{ display: "flex", justifyContent: "center" }}>
          {items.map((item) => {
            return (
              <Grid
                item
                xs={2}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <ItemCard
                  itemName={item.name}
                  itemCost={item.cost}
                  itemImg={item.img}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default Items;
