const express = require('express');
const https = require('https');
const fs = require('fs');
const next = require('next');
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const cors = require("cors");
const path = require('path');
dotenv.config({ path: "./.env" });
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  const server = express();
  server.use(express.json());
  server.use(cors());
  server.use(bodyParser.json());
  server.use(express.static(path.join(__dirname, 'public')))
  
  server.all('*', (req, res) => {
    return handle(req, res);
  });
  server.listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:' + process.env.PORT);
  });
});
