const express = require('express');

const notes = require('../notes/notesModel');

const server = express ();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ server: 'up and running!'});
})



module.exports = server;