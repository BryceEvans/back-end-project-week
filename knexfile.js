// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/notes',
    // client: 'sqlite3',
    // connection: {
    //   filename: './data/notes.db3'
    // },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    }
  },

  testing: {
    client: 'sqlite3',
  connection: {
    filename: './data/test.db3',
  },
  migrations: {
    directory: './data/migrations',
  },
  seeds: {
    directory: './data/seeds',
  },
},

production: {
  client: 'pg',
  connection: 'postgres://ymkpbbmraakuhn:0e0108134c9ceb933669fa7dfc5ca8ef6a05d45679ffabc05c774a6acce319fd@ec2-54-221-253-228.compute-1.amazonaws.com:5432/dfpud2rtn8p0v3',
  // client: 'sqlite3',
  // connection: {
  //   filename: './data/notes.db3'
  // },
  migrations: {
    directory: __dirname + '/data/migrations',
  },
  seeds: {
    directory: __dirname + '/data/seeds',
  },
  ssl: true
},

};
