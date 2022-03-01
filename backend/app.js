const express = require("express");
const chalk = require("chalk");
const { default: axios } = require("axios");

const app = express();
const port = 5001;
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("response from server");
});

app.get("/getAllHeroes", async (req, res) => {
  const response = await axios.get("https://api.opendota.com/api/heroes");
  const allHeroesRaw = response.data;
  //   let heroesArray = [];
  //   for (let i = 0; i < allHeroesRaw.length; i++) {
  //     let heroObj = {};
  //     let accessName = allHeroesRaw[i].name.replace("npc_dota_hero_", "");
  //     heroObj["name"] = allHeroesRaw[i].localized_name;
  //     heroObj["attribute"] = allHeroesRaw[i].primary_attr;
  //     heroObj["roles"] = allHeroesRaw[i].roles;
  //     heroObj[
  //       "img"
  //     ] = `https://cdn.dota2.com/apps/dota2/images/heroes/${accessName}_full.png`;

  //     heroesArray.push(heroObj);
  //   }

  let allHeroesArray = allHeroesRaw.map((hero) => {
    let heroObj = {};
    let accessName = hero.name.replace("npc_dota_hero_", "");
    heroObj["name"] = hero.localized_name;
    heroObj["attribute"] = hero.primary_attr;
    heroObj["roles"] = hero.roles;
    heroObj[
      "img"
    ] = `https://cdn.dota2.com/apps/dota2/images/heroes/${accessName}_full.png`;
    return heroObj;
  });

  res.send(allHeroesArray);
});

app.get("/getAllItems", async (req, res) => {
  const response = await axios.get("");
});

app.listen(port, () => {
  console.log(chalk.yellow(`Listening to request on ${port}`));
});
