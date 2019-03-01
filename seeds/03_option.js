
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('option').del()
    .then(function () {
      // Inserts seed entries
      return knex('option').insert([
        {
          // id: 1,
          question_id: 1,
          option: 'ROMA'
        },
        {
          // id: 2,
          question_id: 1,
          option: 'VICE'
        },
        {
          // id: 3,
          question_id: 1,
          option: 'BLACK PANTHER'
        },
        {
          // id: 4,
          question_id: 1,
          option: 'BLACKkKLANSMAN'
        },
        {
          // id: 5,
          question_id: 1,
          option: 'BOHEMIAN RHAPSODY'
        },
        {
          // id: 6,
          question_id: 1,
          option: 'THE FAVOURITE'
        },
        {
          // id: 7,
          question_id: 1,
          option: 'GREEN BOOK'
        },
        {
          // id: 8,
          question_id: 1,
          option: 'A STAR IS BORN'
        }
      ]);
    })
    .finally( () => {
      knex.raw('SELECT setval(\'option_id_seq\', (SELECT MAX(id) from option))');
    });
};
