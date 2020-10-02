module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller");
  
    var router = require("express").Router();
  
    // cria um novo registro
    router.post("/", tutorials.create);
  
    // tras todos os registros
    router.get("/", tutorials.findAll);
  
    // Recupere todos os tutoriais publicados
    router.get("/published", tutorials.findAllPublished);
  
    // busca por id
    router.get("/:id", tutorials.findOne);
  
    // atualiza um id
    router.put("/:id", tutorials.update);
  
    // deleta um id especifico
    router.delete("/:id", tutorials.delete);
  
    // detela todos os registos
    router.delete("/", tutorials.deleteAll);
  
    app.use('/api/tutorials', router);
    
  };