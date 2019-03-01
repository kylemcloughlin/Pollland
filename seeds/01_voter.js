
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('voter').del()
    .then(function () {
      // Inserts seed entries
      return knex('voter').insert([
        {
          // id: 1,
          encrypted_id: 'A4hj73',
          email: 'weihan.sw@gmail.com'
        },
        {
          // id: 2,
          encrypted_id: 'uY5j73',
          email: 'laviionas772@gmail.com'
        },
        {
          // id: 3,
          encrypted_id: 'agF4vd',
          email: 'kylemcloughlin00@gmail.com'
        }
      ]);
    })
};