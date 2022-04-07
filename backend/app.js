const express = require("express");
const chalk = require("chalk");
const { default: axios } = require("axios");
const cors = require("cors");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const HeroModel = require("../backend/HeroesSchema");
const ItemModel = require("../backend/ItemsSchema");
const UserModel = require("../backend/UserSchema");
const bodyParser = require("body-parser");
const { response } = require("express");
const { addListener } = require("../backend/HeroesSchema");
// const wraithband = require("../backend/images/WraithBand.webp");
// const nulltalisman = require("../backend/images/nulltalisman.webp");
// const bracer = require("../backend/images/bracer.webp");
// const dagger = require("../backend/images/dagger.webp");
// const phaseboots = require("../backend/images/phaseboots.webp");
// const powerthreads = require("../backend/images/powerthreads.webp");
// const arcaneboots = require("../backend/images/arcaneboots.webp");
// const scepter = require("../backend/images/scepter.webp");
// const heart = require("../backend/images/heart.webp");

const app = express();
const port = 5001;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/images", express.static(__dirname + "/images"));

mongoose.connect(
  "mongodb+srv://jasan:1234@cluster0.4lqdu.mongodb.net/DotaHeroesDB"
);
// Test connection
mongoose.connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

const items = [
  {
    name: "Wraith Band",
    cost: 465,
    img: "http://localhost:5001/images/wraithband.png",
  },
  {
    name: "Null Talisman",
    cost: 465,
    img: "http://localhost:5001/images/nulltalisman.png",
  },
  {
    name: "Bracer",
    cost: 475,
    img: "http://localhost:5001/images/bracer.png",
  },
  {
    name: "Dagger",
    cost: 2150,
    img: "http://localhost:5001/images/dagger.png",
  },
  {
    name: "Phase Boots",
    cost: 1600,
    img: "http://localhost:5001/images/phaseboots.png",
  },
  {
    name: "Power Threads",
    cost: 1550,
    img: "http://localhost:5001/images/powerthreads.png",
  },
  {
    name: "Arcane Boots",
    cost: 1400,
    img: "http://localhost:5001/images/arcaneboots.png",
  },
  {
    name: "Scythe of Vyse",
    cost: 4850,
    img: "http://localhost:5001/images/hex.png",
  },
  {
    name: "ButterFly",
    cost: 5250,
    img: "http://localhost:5001/images/butterfly.png",
  },
  {
    name: "Heart of Tarrasque",
    cost: 5300,
    img: "http://localhost:5001/images/heart.png",
  },
  {
    name: "Aghanim's Scepter",
    cost: 4800,
    img: "http://localhost:5001/images/scepter.png",
  },
];

app.get("/", (req, res) => {
  res.status(200).send("response from server");
});

app.get("/getAllHeroes", async (req, res) => {
  const response = await axios.get("https://api.opendota.com/api/heroes");
  const allHeroesRaw = response.data;
  // let heroesArray = [];
  // for (let i = 0; i < allHeroesRaw.length; i++) {
  //   let heroObj = {};
  //   let accessName = allHeroesRaw[i].name.replace("npc_dota_hero_", "");
  //   heroObj["name"] = allHeroesRaw[i].localized_name;
  //   heroObj["attribute"] = allHeroesRaw[i].primary_attr;
  //   heroObj["roles"] = allHeroesRaw[i].roles;
  //   heroObj[
  //     "img"
  //   ] = `https://cdn.dota2.com/apps/dota2/images/heroes/${accessName}_full.png`;

  //   heroesArray.push(heroObj);
  // }

  let allHeroesArray = allHeroesRaw.map((hero) => {
    let heroObj = {};
    let accessName = hero.name.replace("npc_dota_hero_", "");
    heroObj["id"] = hero.id;
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

app.get("/seed-Heroes", async (req, res) => {
  const response = await axios.get("https://api.opendota.com/api/heroes");
  const allHeroesRaw = response.data;
  // let heroesArray = [];
  // for (let i = 0; i < allHeroesRaw.length; i++) {
  //   let heroObj = {};
  //   let accessName = allHeroesRaw[i].name.replace("npc_dota_hero_", "");
  //   heroObj["name"] = allHeroesRaw[i].localized_name;
  //   heroObj["attribute"] = allHeroesRaw[i].primary_attr;
  //   heroObj["roles"] = allHeroesRaw[i].roles;
  //   heroObj[
  //     "img"
  //   ] = `https://cdn.dota2.com/apps/dota2/images/heroes/${accessName}_full.png`;

  //   heroesArray.push(heroObj);
  // }

  let allHeroesArray = allHeroesRaw.map((hero) => {
    let heroObj = {};
    let accessName = hero.name.replace("npc_dota_hero_", "");
    heroObj["id"] = hero.id;
    heroObj["name"] = hero.localized_name;
    heroObj["attribute"] = hero.primary_attr;
    heroObj["roles"] = hero.roles;
    heroObj[
      "img"
    ] = `https://cdn.dota2.com/apps/dota2/images/heroes/${accessName}_full.png`;
    return heroObj;
  });

  for (let i = 0; i < allHeroesArray.length; i++) {
    const heroObject = {
      id: allHeroesArray[i].id,
      name: allHeroesArray[i].name,
      attribute: allHeroesArray[i].attribute,
      roles: allHeroesArray[i].roles,
      img: allHeroesArray[i].img,
    };
    try {
      let currentHero = new HeroModel(heroObject);
      await currentHero.save((err, doc) => {
        if (err) {
          return console.error(err);
        }
        console.log("Document inserted");
      });
    } catch (error) {
      console.log("failed");
    }
  }

  res.send("Data sent");
});

app.get("/getItems", (req, res) => {
  res.status(200).send(items);
});

app.get("/seed-Items", async (req, res) => {
  let response = items;
  for (let i = 0; i < response.length; i++) {
    try {
      let currentItem = new ItemModel({
        name: response[i].name,
        cost: response[i].cost,
        img: response[i].img,
      });
      await currentItem.save((err, doc) => {
        if (err) {
          return console.error(err);
        }
        console.log("Items saved and inserted");
      });
    } catch (error) {
      console.log("failed");
    }
  }
  res.send("Item sent");
});

app.get("/hero-data", async (req, res) => {
  let result = await HeroModel.find();

  res.send(result);
});
app.get("/item-data", async (req, res) => {
  let result = await ItemModel.find();

  res.send(result);
});

app.post("/registeredUsers", async (req, res) => {
  console.log(req.body);
  let SaveUser = new UserModel({
    firstName: req.body.firstName,
    surname: req.body.surname,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
  });

  SaveUser.save((error, savedUser) => {
    if (error) throw error;
    res.json(savedUser);
  });
});

app.post("/loginUsers", async (req, res) => {
  const body = req.body;
  const user = await UserModel.findOne({ email: req.body.email });

  if (user) {
    // check user password with hash password stored in the database
    const validPassword = await bcrypt.compare(body.password, user.password);
    if (validPassword) {
      res.status(200).json(user);
    } else {
      res.status(400).json({ error: "Invalid Password" });
    }
  } else {
    res.status(401).json({ error: "User does not exist" });
  }
});

app.get("/user-data", async (req, res) => {
  let result = await UserModel.find();
  res.send(result);
});

app.post("/checkUser", async (req, res) => {
  const body = req.body;
  const user = await UserModel.findOne(body);

  if (user) {
    res.status(200).json(user.email);
    console.log(user.email);
  } else {
    res.status(400).json({ error: "Invalid User" });
  }

  // if(body.name === user)
});

app.listen(port, () => {
  console.log(chalk.yellow(`Listening to request on ${port}`));
});
