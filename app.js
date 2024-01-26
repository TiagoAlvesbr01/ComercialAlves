/*let express = require('express');

let app = express;

//app.get('/', function (req, res) {
  //  res.send('Página inicial do site')
 // })

  app.get('/sobre-empresa', function (req, res) {
    res.send('Sobre empresa')
  })
  // Iniciar o servidor na porta 8080
  app.listen(8080, () =>{
    console.log('Servidor iniciado na porta 8080 http://localhodt:8080')
  })*/

  let mysql = require('mysql2')

  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '97508384',
    database: 'tiago',
  });

  connection.connect(function (err){
    console.log('Conexão com banco de dados realizada com sucesso!')
  })
