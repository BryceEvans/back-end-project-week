const db = require('../data/dbConfig');

module.exports = {
  insert,
  getAll,
  findById,
};

async function insert(note) {
  return db('notes').insert(note);
}

function getAll() {
  return db('notes');
}

function findById(id) {
  return null;
}