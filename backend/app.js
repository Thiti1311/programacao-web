const mysql = require('mysql2');
const express = require('express');
const app = express();
const cors = require('cors'); // Certifique-se de que você tenha o CORS instalado

const route = require('./routes/all.route');

app.use(cors());
app.use(express.json());
route(app);

const db = mysql.createConnection({
  host: 'localhost',        // Endereço do seu servidor MySQL
  user: 'root',      // Seu nome de usuário MySQL
  password: '1234',    // Sua senha MySQL
  database: 'incontinencia', // Nome do seu banco de dados MySQL
});

// Conecte-se ao banco de dados
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados MySQL');
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});