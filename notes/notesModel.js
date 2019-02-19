const db = require('../data/dbConfig');

module.exports = {
  insert,
  getAll,
  findById,
  update,
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

async function update(id, changes) {
  return db('notes').where('id', id).update(changes);
}