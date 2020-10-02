const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

const db = require("./app/models");

app.use(cors(corsOptions));

db.sequelize.sync();

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Não há conseguimos conectar ao database:', err);
  });

/*db.sequelize.sync({
  force: true
}).then(() => {
  console.log("Apagamos e reescrevemos o banco :)");
});
*/

// analisa solicitações de tipo de conteúdo - application / json
app.use(bodyParser.json());

// analisar solicitações de content-type - application / x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

// rota simples
app.get("/", (req, res) => {
  res.json({
    message: "Bem vindo ao nosso servidor."
  });
});

// definir porta, ouvir pedidos
const PORT = process.env.PORT || 3000;
require("./app/routes/turorial.routes")(app);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});