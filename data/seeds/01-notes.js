
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {title: 'Note Title', textBody: 'Note Body'},
        {title: 'Another note title', textBody: 'Another note body'},
      ]);
    });
};
