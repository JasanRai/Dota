import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeroCard from "../Components/HeroCard";
import heroesBackground from "../Images/dotaheroesbg.jpg";
import Pagination from "@material-ui/lab/Pagination";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

function Heroes() {
  const [allHeroes, setAllHeroes] = useState([]);
  const [attribute, setAttribute] = useState("");
  const [attriTitleColor, setAttriTitleColor] = useState("");
  const [filteredHeroes, setFilteredHeroes] = useState([]);
  const [page, setPage] = useState(1);

  console.log(allHeroes);

  const handleChange = (e) => {
    if (e === "Strength") {
      setAttribute("Strength");
      setAttriTitleColor("#c13e42");
    }
    if (e === "Intelligence") {
      setAttribute("Intelligence");
      setAttriTitleColor("#21a1cf");
    }
    if (e === "Agility") {
      setAttribute("Agility");
      setAttriTitleColor("#3dc28b");
    }
    if (e === "") {
      setAttribute("");
      setAttriTitleColor("rgba(44,44,44,0.9)");
    }
  };

  const filterHeroesList = allHeroes.filter((hero) => {
    if (attribute === "") {
      return hero;
    }
    if (attribute === "Strength") {
      return hero.attribute === "str";
    }
    if (attribute === "Intelligence") {
      return hero.attribute === "int";
    }
    if (attribute === "Agility") {
      return hero.attribute === "agi";
    }
  });

  const getHeroesForPage = (page) => {
    const heroesPerPage = 16;

    let start = page * heroesPerPage - heroesPerPage + 1;
    let end = page * heroesPerPage;

    return filterHeroesList.slice(start - 1, end);
  };

  useEffect(() => {
    fetch(`http://localhost:5001/hero-data`)
      .then((res) => res.json())
      .then((res) => setAllHeroes(res));
  }, [page]);

  return (
    <div
      style={{
        backgroundImage: `url(${heroesBackground})`,
        width: "100%",
        height: "100%",
      }}
    >
      <div style={{ height: 30 }}>{""}</div>
      <div
        style={{
          fontSize: 30,
          fontFamily: "cursive",
          fontWeight: "bold",
          color: "#fff",
          height: 70,
          background: `${attriTitleColor}`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {attribute} Heroes
      </div>
      <div>
        <Grid container>
          <Grid
            item
            xs={4}
            style={{ display: "flex", justifyContent: "end", marginTop: 40 }}
          >
            <Button
              style={{
                color: "#fff",
                background: "#c13e42",
                border: "2px solid",
                borderRadius: 7,
                borderColor: "#792729",
                width: 170,
                height: 50,
                fontFamily: "initial",
                fontWeight: "bold",
              }}
              onClick={() => handleChange("Strength")}
            >
              Strength
            </Button>
          </Grid>
          <Grid
            item
            xs={4}
            style={{ display: "flex", justifyContent: "center", marginTop: 40 }}
          >
            <Button
              style={{
                color: "#fff",
                background: "#21a1cf",
                border: "2px solid",
                borderRadius: 7,
                borderColor: "#197b9f",
                width: 170,
                height: 50,
                fontFamily: "initial",
                fontWeight: "bold",
              }}
              onClick={() => handleChange("Intelligence")}
            >
              Intelligence
            </Button>
          </Grid>
          <Grid
            item
            xs={4}
            style={{
              display: "flex",
              justifyContent: "start",
              marginTop: 40,
            }}
          >
            <Button
              style={{
                color: "#fff",
                background: "#3dc28b",
                border: "2px solid",
                borderRadius: 7,
                borderColor: "#2e956b",
                width: 170,
                height: 50,
                fontFamily: "initial",
                fontWeight: "bold",
              }}
              onClick={() => handleChange("Agility")}
            >
              Agility
            </Button>
          </Grid>
        </Grid>
      </div>
      <Grid container style={{ marginTop: 10 }}>
        {getHeroesForPage(page).map((hero) => {
          return (
            <Grid
              item
              xs={3}
              key={hero.id}
              style={{ display: "flex", justifyContent: "center" }}
            >
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
      <Pagination
        variant="outlined"
        count={Math.ceil(filterHeroesList.length / 16)}
        defaultPage={1}
        onChange={(event, value) => setPage(value)}
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#9d9d9d",
        }}
      />
    </div>
  );
}

export default withRouter(Heroes);
