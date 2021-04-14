const express = require('express');
const axios = require('axios');
const cors = require('cors');

require('dotenv').config();

const serverPort = 8000;

const app = express();

app.use(cors());

app.get('/api/:characterId', (req, res) => {
  const { characterId } = req.params;
  axios.get(`https://superheroapi.com/api/${process.env.TOKEN}/${characterId}`)
    .then((response) => res.send(response.data))
    .catch((err) => {
      console.log(err);
    });
});

app.listen(serverPort, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('server listening ;)');
  }
});
