// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/FLOR_DB'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  }

};
