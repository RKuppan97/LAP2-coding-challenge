const express = require('express');
const cors = require('cors');

// middleware // 
const server = express();
server.use(cors());
server.use(express.json());

const postRoutes = require('./controllers/posts')

server.use('/posts', postRoutes)

const port = process.env.PORT || 3000;

// Root route
//server.get('/', (req, res) => res.send('Hello, world!')) - might not be needed?

module.exports = server