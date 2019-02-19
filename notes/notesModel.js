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

async function findById(id) {
  return db('notes').where('id', id);
}