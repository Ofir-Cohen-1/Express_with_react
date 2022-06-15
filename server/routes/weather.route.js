import express from "express";
const route = express.Router();
// const axios = require('axios').default;
import axios from "axios";


route.get('/weather/:city', async (req, res) => {
  try {
    const { city } = req.params;
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e043a5fb3c15d44d133bb51080a6521f`
    );

    res.status(200).send({ K: data.main.temp });
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = route;
