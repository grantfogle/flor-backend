
exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', (user) => {
        user.increments('user_id');
        user.string('username');
        user.string('password');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
