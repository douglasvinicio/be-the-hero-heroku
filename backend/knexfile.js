// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations:{
      directory:'./src/database/migrations'
    },
    useNullAsDefault : true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'postgres://pjivtxkzxspamb:703924fb7df9fe9a5fc2d59c2359018c93a32ad802dff8c8a4a465d5c96eb9da@ec2-52-71-55-81.compute-1.amazonaws.com:5432/dfp04lpap57hgp',
      user:     'pjivtxkzxspamb',
      password: '703924fb7df9fe9a5fc2d59c2359018c93a32ad802dff8c8a4a465d5c96eb9da'

    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

