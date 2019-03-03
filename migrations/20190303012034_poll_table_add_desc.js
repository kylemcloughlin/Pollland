exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('option', function(table){
      table.string('description');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('option', function(table){
      table.dropColumn('description');
    })
  ])
};