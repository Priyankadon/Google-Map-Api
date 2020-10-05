const express = require("express");
const https = require("https");
const app = express();
const distance=2000;
const lat= 59.332364;
const lang= 18.0645673;
const port = 3000;
const axios = require("axios");

app.get("/", (req, res) => {
  const options = {
    hostname: "maps.googleapis.com",
    port: 443,
    path:
      "/maps/api/place/findplacefromtext/json?input=bicycle%20stores&inputtype=textquery&fields=name,formatted_address,photos,opening_hours,rating&locationbias=circle:distance@lat,lang&key=AIzaSyBFr21Yr1zyO2kbp3xSYa3VKv0zRURWtDg",
    method: "GET",
  };

  axios
    .get(
      "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=bicycle%20stores&inputtype=textquery&fields=name,formatted_address,photos,opening_hours,rating&locationbias=circle:distance@lat,1ang&key=AIzaSyBFr21Yr1zyO2kbp3xSYa3VKv0zRURWtDg"
    )
    .then((response) => {
      console.log(response.data.url);
      console.log(response.data.explanation);
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
