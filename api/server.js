const express = require('express');

const notes = require('../notes/notesModel');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ server: 'up and running!'});
})

// server.get('/notes', async (req, res) => {
//   const rows = await notes.getAll();
//   res.status(200).json(rows);
// })

server.get('/notes', async (req, res) => {
  const rows = await notes.getAll();
  res.status(200).json(rows);
})

// server.get('/api/notes', (req, res) => {

// })


module.exports = server;