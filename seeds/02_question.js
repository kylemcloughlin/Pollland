
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('question').del()
  .then(function () {
    // Inserts seed entries
    return knex('question').insert([
      {
        id: 1,
        question: 'Who do YOU think will win the Oscar?',
        creator_id: 1
      }
    ]);
    knex.raw("SELECT setval('question_id_seq', (SELECT MAX(id) from question));");
  });
};