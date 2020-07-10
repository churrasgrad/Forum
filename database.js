const mariadb = require('mariadb');
const pool = mariadb.createPool({
  // Informações de conexão com o banco
  host: 'localhost', 
  user:'root', 
  password: '',
  database: 'forum',
  connectionLimit: 5
});

module.exports = {
  getAll(table, callback) { //Função para pegar todos os dados de uma tabela
    pool.getConnection() //Inicia a conexão
    .then(conn => { //Então, com a conexão iniciada sem erros
      conn.query("SELECT * FROM " + table) //Executa a querry no banco
      .then((rows) => {//Então, com a resposta do banco
        callback(rows) //Executa a função com a resposta
      })
    })
    .catch(err => { //Deu erro na conexão
      console.log('Banco de dados não iniciado.')
    });
  }
}