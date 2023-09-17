const express = require("express");
const app = express();
const ChannelModel = require("./channel");
const SelectModel = require("./selectChannel");
const LogInModel = require("./login");
const cors = require("cors");
//const mongoConnect = require("./util/database");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
//change because i came down one version of mongoose in this file to insert my data from node to atlas
mongoose.set("strictQuery", false);
const dbUrl =
  "mongodb+srv://gkarachalios:TlyTuLB7AH8oAuBc@cluster0.q8fq3gl.mongodb.net/currencies?retryWrites=true&w=majority";

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//connection with my database

mongoose
  .connect(dbUrl, connectionParams)
  .then(() => {
    console.log("Connected");
  })
  .catch((e) => {
    console.log("Error", e);
  });

//read my data from UI for the money conversion

app.post("/insert", async (req, res) => {
  const { baseCurrency } = req.body;
  const { targetCurrency } = req.body;
  const { amount } = req.body;
  const base = baseCurrency;
  const target = targetCurrency;
  const money = amount;
  // console.log(base);
  //console.log(target);
  //console.log(money);
  //find the selected currencies in database
  ChannelModel.findOne(
    { BaseCurrency: base, TargetCurrency: target },
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        // money conversion

        res.json(results.value * money);
        //console.log(results.value * money);
      }
    }
  );
});

const money = 1234;

app.get("/convert", async (req, res) => {
  res.json({ money });
});

//upload data to atlas channel file

app.get("/api/mongo", (req, res) => {
  var channelModel = new ChannelModel();
  channelModel.BaseCurrency = "Us Dollar";
  channelModel.TargetCurrency = "Euro";
  channelModel.value = "0.93133";
  channelModel.id = 1;
  channelModel.exists = "YES";
  console.log("inserted");

  channelModel.save((err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.status(200).send({ message: "Inserted" });
    }
  });
});
//account creation
app.get("/api/login", (req, res) => {
  var loginModel = new LogInModel();
  loginModel.username = "christos";
  loginModel.password = "2222";

  console.log("inserted");

  loginModel.save((err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.status(200).send({ message: "Inserted" });
    }
  });
});

//acount validation
app.post("/api/login", async (req, res) => {
  const { username } = req.body;
  const { password } = req.body;

  const nodename = username;
  const nodepassword = password;

  try {
    const check = await LogInModel.findOne({
      username: nodename,
      password: nodepassword,
    });
    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("notexist");
  }
});

// upload data to atlas select file

app.get("/api/select", (req, res) => {
  var selectModel = new SelectModel();
  selectModel.name = "Chinese Yuan Renminbi";
  selectModel.exists = false;

  console.log("inserted");

  selectModel.save((err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.status(200).send({ message: "Inserted" });
    }
  });
});
//fetching the data from mongo to frontend for the select
app.get("/selected", (req, res) => {
  SelectModel.find((err, arrayofResults) => {
    if (err) {
      console.log(err);
    } else {
      res.json(arrayofResults);
      // console.log(arrayofResults);
    }
  });
});

//fetching data from mongo for value.js

app.get("/update", (req, res) => {
  ChannelModel.find((err, arrayofResults) => {
    if (err) {
      console.log(err);
    } else {
      res.json(arrayofResults);
      // console.log(arrayofResults);
    }
  });
});

//update the cuurencies page
app.post("/api/update", async (req, res) => {
  const { name } = req.body;

  const currencyName = name;
  SelectModel.findOneAndUpdate(
    { name: currencyName },
    [{ $set: { exists: { $eq: [false, "$exists"] } } }],
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
});

app.listen(9000, () => {
  console.log("Server started on port 9000");
});
