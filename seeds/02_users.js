
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'brianballentine',
          password: '$2a$10$kD8EXNSiQyB02cW7AJ4rhO5JZNy2XLsx5UhJ21yymU/snRf3V6Wgy',
        },
        {
          username: 'grantfogle',
          password: '$2a$10$kD8EXNSiQyB02cW7AJ4rhO5JZNy2XLsx5UhJ21yymU/snRf3V6Wgy',
        },
        {
          username: 'kateisgreat',
          password: '$2a$10$kD8EXNSiQyB02cW7AJ4rhO5JZNy2XLsx5UhJ21yymU/snRf3V6Wgy',
        },
        {
          username: 'mstwomey',
          password: '$2a$10$wfp48HTn7CADANKZs5.iFuuH/BSnPoyywg8QYMm9UZ/zXt2rCA7EO',
        },
        {
          username: 'thatguy',
          password: '$2a$10$lxWOTMH46bq42EeHEjJM4eaoh8pI0Jqstnhve79mjJRFj.2NJSAEm',
        },
      ]);
    });
};