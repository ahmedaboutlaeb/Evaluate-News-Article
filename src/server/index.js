require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fetch = (...args) =>
import("node-fetch").then(({ default: fetch }) => fetch(...args));
const mockAPIResponse = require("./mockAPI.js");
const port = process.env.PORT || 3000;
const app = express();

//middlewares
app.use(express.static("dist"));
app.use(express.json());
app.use(cors());
//test server
app.get("/test", (req, res) => {
  res.status(200).send(mockAPIResponse);
});

app.post("/", async (req, res) => {
  const urlInfo = await fetch(
    `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${req.body.text}&lang=en`
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));
    
  res.status(200).json(urlInfo);
});

app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON PORT: ${port}`);
});