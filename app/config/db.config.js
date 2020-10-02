module.exports = {
  HOST: "mysql669.umbler.com",
  USER: "afmin2020",
  PASSWORD: "admin2020",
  DB: "apifullstack",
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};