exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('voter', (table) => {
      table.increments('id').primary();
      table.string('encrypted_id');
      table.string('email');

    }),
    knex.schema.createTable('question', (table) => {
      table.increments('id').primary();
      table.string('encrypted_id');
      table.string('question');
      table.integer('creator_id');
      table.foreign('creator_id').references('voter.id');

    }),
    knex.schema.createTable('option', (table) => {
      table.increments('id').primary();
      table.integer('question_id');
      table.string('option');
      table.foreign('question_id').references('question.id');

    }),
    knex.schema.createTable('vote', (table) => {
      table.integer('voter_id');
      table.integer('question_id');
      table.integer('option_id');
      table.integer('point');
      table.foreign('question_id').references('question.id');
      table.foreign('option_id').references('option.id');
      table.foreign('voter_id').references('voter.id');

    })
  ]);
};
exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('vote'),
    knex.schema.dropTable('option'),
    knex.schema.dropTable('question'),
    knex.schema.dropTable('voter')
  ]);
};