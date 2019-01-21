
exports.up = function (knex, Promise) {
    return knex.schema.createTable('userstoflowers', (usertoflower) => {
        usertoflower.integer('user_id').references('user_id').inTable('users');
        usertoflower.integer('wildflower_id').references('id').inTable('wildflowers');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('userstoflowers');
};
