const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const mysql = require('mysql2/promise');
const dbConfig = require('../config/database'); // Configure as informações do seu banco de dados

const registerController = async (req, res) => {
  try {
    // Validação dos dados recebidos do cliente (usando express-validator)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, email, password } = req.body;

    // Conectar ao banco de dados
    const connection = await mysql.createConnection(dbConfig);

    // Verificar se o email já está em uso
    const [existingUser] = await connection.execute('SELECT * FROM usuarios WHERE email = ?', [email]);

    if (existingUser.length > 0) {
      connection.end(); // Encerrar a conexão
      return res.status(400).json({ success: false, error: 'O email já está em uso.' });
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Inserir o novo usuário no banco de dados
    await connection.execute('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', [name, email, hashedPassword]);

    // Encerrar a conexão
    connection.end();

    return res.status(201).json({ success: true });
  } catch (error) {
    console.error('Erro no registro:', error);
    return res.status(500).json({ success: false, error: 'Erro interno no servidor.' });
  }
};

module.exports = registerController;
