const express = require('express');
const listRoutes = require('express-list-endpoints');
const bodyParser = require('body-parser');
const productRoutes = require('./src/services/products');
const cors = require('cors');
const { join } = require('path');

const server = express();

server.use('/image', express.static(join(__dirname, '../Backend/public/imgs')));
server.use(cors());
server.use(bodyParser.json());

server.use('/products', productRoutes);

console.log(listRoutes(server));

server.listen(3000);
