const express = require('express');

const notes = require('../notes/notesModel');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ server: 'up and running!'});
})

server.get('/notes', async (req, res) => {
  const rows = await notes.getAll();
  res.status(200).json(rows);
})



server.post('/notes', async (req, res) => {
  const noteData = req.body;

  if (noteData.title && noteData.textBody) {
    const ids = await notes.insert(noteData);
    res.status(201).json(ids);
  } else {
    res.status(422).json({ error: "missing title and/or textBody" });
  }
})


module.exports = server;