"use strict";

var express = require("express");

var bodyParser = require("body-parser");

var cors = require("cors");

var app = express();
var corsOptions = {
  origin: "http://localhost:8081"
};

var db = require("./app/models"); //db.sequelize.sync();


app.use(cors(corsOptions));
db.sequelize.sync({
  force: true
}).then(function () {
  console.log("Apagamos e reescrevemos o banco :)");
}); // analisa solicitações de tipo de conteúdo - application / json

app.use(bodyParser.json()); // analisar solicitações de content-type - application / x-www-form-urlencoded

app.use(bodyParser.urlencoded({
  extended: true
})); // rota simples

app.get("/", function (req, res) {
  res.json({
    message: "Bem vindo ao nosso servidor."
  });
}); // definir porta, ouvir pedidos

var PORT = process.env.PORT || 8081;

require("./app/routes/turorial.routes")(app);

app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT, "."));
});