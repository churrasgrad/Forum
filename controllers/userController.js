const database = require('../database')

// Controlador de Usuários
// Controladores servem para dividir as funções da rota e definir variáveis antes de exibir a página ao usuário.
module.exports = {

  // Coletar os usuários
  getAll(req, res) { //Temos acesso a requisição, a resposta e ao banco de dados 
    database.getAll('tb_user', rows => { //Acessa a layer de database e procura a função get all, ela tem o callback de uma função com o parametro de resposta sendo o resultado do banco de dados.
      res.render('home', {
        users: rows
      }) // Renderizamos a view "home" e definimos a variável "users" como a resposta do banco
    })
  },
  delete(req, res) {
    console.log(req.body)
    res.json({"response": "sucesso!"})
  }
}