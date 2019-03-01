
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('vote').del()
    .then(function () {
      // Inserts seed entries
      return knex('vote').insert([
        {
          voter_id: 1,
          question_id: 1,
          option_id: 1,
          point: 8
        },
        {
          voter_id: 1,
          question_id: 1,
          option_id: 2,
          point: 7
        },
        {
          voter_id: 1,
          question_id: 1,
          option_id: 3,
          point: 6
        },
        {
          voter_id: 1,
          question_id: 1,
          option_id: 4,
          point: 5
        },
        {
          voter_id: 1,
          question_id: 1,
          option_id: 5,
          point: 4
        },
        {
          voter_id: 1,
          question_id: 1,
          option_id: 6,
          point: 3
        },
        {
          voter_id: 1,
          question_id: 1,
          option_id: 7,
          point: 2
        },
        {
          voter_id: 1,
          question_id: 1,
          option_id: 8,
          point: 1
        },
        {
          voter_id: 2,
          question_id: 1,
          option_id: 1,
          point: 8
        },
        {
          voter_id: 2,
          question_id: 1,
          option_id: 2,
          point: 7
        },
        {
          voter_id: 2,
          question_id: 1,
          option_id: 3,
          point: 6
        },
        {
          voter_id: 2,
          question_id: 1,
          option_id: 4,
          point: 5
        },
        {
          voter_id: 2,
          question_id: 1,
          option_id: 5,
          point: 4
        },
        {
          voter_id: 2,
          question_id: 1,
          option_id: 6,
          point: 3
        },
        {
          voter_id: 2,
          question_id: 1,
          option_id: 7,
          point: 2
        },
        {
          voter_id: 2,
          question_id: 1,
          option_id: 8,
          point: 1
        },
        {
          voter_id: 3,
          question_id: 1,
          option_id: 1,
          point: 8
        },
        {
          voter_id: 3,
          question_id: 1,
          option_id: 2,
          point: 7
        },
        {
          voter_id: 3,
          question_id: 1,
          option_id: 3,
          point: 6
        },
        {
          voter_id: 3,
          question_id: 1,
          option_id: 4,
          point: 5
        },
        {
          voter_id: 3,
          question_id: 1,
          option_id: 5,
          point: 4
        },
        {
          voter_id: 3,
          question_id: 1,
          option_id: 6,
          point: 3
        },
        {
          voter_id: 3,
          question_id: 1,
          option_id: 7,
          point: 2
        },
        {
          voter_id: 3,
          question_id: 1,
          option_id: 8,
          point: 1
        }
      ]);
    })
};