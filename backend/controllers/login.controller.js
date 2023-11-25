const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const mysql = require('mysql2/promise');
const dbConfig = require('../config/database'); // Configure as informações do seu banco de dados

const loginController = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { email, password } = req.body;

    // Conectar ao banco de dados
    const connection = await mysql.createConnection(dbConfig);

    // Consultar se existe um usuário com o e-mail fornecido
    const [user] = await connection.execute('SELECT * FROM usuarios WHERE email = ?', [email]);

    // Verificar se o usuário foi encontrado
    if (user.length === 0) {
      // Se não houver usuário, encerrar a conexão e retornar erro
      connection.end();
      return res.status(404).json({ success: false, error: 'Usuário não encontrado.' });
    }

    // Comparar a senha fornecida com a senha no banco de dados
    const isPasswordValid = await bcrypt.compare(password, user[0].senha);

    if (!isPasswordValid) {
      // Se a senha não for válida, encerrar a conexão e retornar erro
      connection.end();
      return res.status(401).json({ success: false, error: 'Senha incorreta.' });
    }

    // Encerrar a conexão
    connection.end();

    return res.status(200).json({ success: true, user: user[0] });
  } catch (error) {
    console.error('Erro no login:', error);
    return res.status(500).json({ success: false, error: 'Erro interno no servidor.' });
  }
};

module.exports = loginController;
