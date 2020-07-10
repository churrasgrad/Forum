// Importa o Express
const express = require('express');
const bodyParser = require('body-parser') ;
const app = express();
const port = 3000;

// Define leitura de requisições
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// Define o EJS como view engine
app.set('view engine', 'ejs')
// Define a pasta dependencies como pública
app.use(express.static('modules'));


// Importação dos controladores
var userController = require('./controllers/userController')
//var coisaController = require('./controllers/coisaController')
// ----------------------------

// Rotas do aplicativo
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/home', (req, res) => {userController.getAll(req, res)}) // Passamos o objeto da requisição, a reposta e o banco

app.post('/deleteUser', (req, res) => {userController.delete(req, res)})

//app.get('/coisas', (req, res) => {coisaController.getAll(req, res)})











// Inicia o servidor
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))