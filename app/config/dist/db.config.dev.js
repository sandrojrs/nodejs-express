"use strict";

module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "99844860",
  DB: "tutorial",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};