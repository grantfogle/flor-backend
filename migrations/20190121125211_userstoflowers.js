
exports.up = function (knex, Promise) {
    return knex.schema.createTable('userstoflowers', (usertoflower) => {
        usertoflower.integer('user_id').references('user_id').inTable('users').onDelete('cascade');
        usertoflower.integer('wildflower_id').references('id').inTable('wildflowers').onDelete('cascade');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('userstoflowers');
};
