
exports.up = function (knex, Promise) {
    return knex.schema.createTable('wildflowers', (wildflower) => {
        wildflower.increments('id');
        wildflower.string('name');
        wildflower.string('family');
        wildflower.string('description', 1000);
        wildflower.string('image');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('wildflowers');
};
