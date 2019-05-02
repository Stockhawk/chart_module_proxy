require('newrelic');
const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 6969;

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/stocks/:stocksId', express.static(path.join(__dirname, 'public')));

const chart = axios.create({
  baseURL: 'http://localhost:4000',
});

app.use('/api/stocks/:stockId', (req, res) => {
  chart.get(`/api/stocks/${req.params.stockId}`)
    .then(response => res.send(response.data))
    .catch(err => res.send(err));
})

app.listen(port, () => {
  console.log(`proxy server running at: http://localhost:${port}`);
});

