import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeroCard from "../Components/HeroCard";

export default function Heroes() {
  const [allHeroes, setAllHeroes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/getAllHeroes")
      .then((res) => res.json())
      .then((res) => setAllHeroes(res));
  }, []);

  return (
    <div>
      {" "}
      <Grid container>
        {allHeroes.map((hero) => {
          return (
            <Grid item xs={3}>
              <HeroCard
                heroName={hero.name}
                heroImgUrl={hero.img}
                primaryAttribute={hero.attribute}
                roles={hero.roles}
              />
            </Grid>
          );
        })}{" "}
      </Grid>
    </div>
  );
}
