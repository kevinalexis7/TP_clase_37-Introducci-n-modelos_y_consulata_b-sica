require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME_DEV,
    password: process.env.DB_PASSWORD_DEV,
    database: process.env.DB_DATABASE_DEV,
    host: "127.0.0.1",
    dialect: "mysql",
    port: process.env.DB_PORT_DEV
  },
  test: {
    username: "root",
    password: null,
    database: process.env.DB_DATABASE_DEV,
    host: "127.0.0.1",
    dialect: "mysql",
    port: process.env.DB_PORT_DEV
  },
  production: {
    username: "root",
    password: null,
    database: process.env.DB_DATABASE_DEV,
    host: "127.0.0.1",
    dialect: "mysql",
    port: process.env.DB_PORT_DEV
  }
}
