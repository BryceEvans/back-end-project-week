const express = require('express');

const notes = require('../notes/notesModel');

const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.status(200).json({ server: 'up and running!'});
})

server.get('/notes', async (req, res) => {
  const rows = await notes.getAll();
  res.status(200).json(rows);
})

server.get('/notes/:id', async (req, res) => {
  const { id } = req.params;
  const response = await notes.findById(id);

  if (response.length > 0) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ error: "note with specified ID does not exist" })
  }
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

server.put('/notes/:id', async (req, res) => {
  const { id } = req.params;
  const note = req.body;
  const response = await notes.update(id, note);

  if (response) {
    res.status(201).json(response);
  } else {
    res.status(404).json({ error: "note with specified ID does not exist" });
  }
})

server.delete('/notes/:id', async (req, res) => {
  const { id } = req.params;
  const response = await notes.remove(id);

  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ error: "note with specified ID does not exist" });
  }
})

module.exports = server;