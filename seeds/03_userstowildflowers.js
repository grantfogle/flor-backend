
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('userstoflowers').del()
    .then(function () {
      // Inserts seed entries
      return knex('userstoflowers').insert([
        {
          user_id: 1,
          wildflower_id: 1,
        },
        {
          user_id: 1,
          wildflower_id: 2,
        },
        {
          user_id: 2,
          wildflower_id: 3,
        },
        {
          user_id: 2,
          wildflower_id: 2,
        },
        {
          user_id: 3,
          wildflower_id: 2,
        },
        {
          user_id: 1,
          wildflower_id: 4,
        },
        {
          user_id: 2,
          wildflower_id: 5,
        },
      ]);
    });
};
