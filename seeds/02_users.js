
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'brianballentine',
          password: 'password',
        },
        {
          username: 'grantfogle',
          password: 'password',
        },
        {
          username: 'kateisgreat',
          password: 'password',
        },
        {
          username: 'mstwomey',
          password: 'gopats',
        },
        {
          username: 'thatguy',
          password: 'thatguy',
        },
      ]);
    });
};