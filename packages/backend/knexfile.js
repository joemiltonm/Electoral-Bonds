// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const development = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database:'postgres',
      user:     'postgres',
      password: 'password',
      port:     '5432'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  }
};

export default development;