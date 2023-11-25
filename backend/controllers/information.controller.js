const { validationResult } = require('express-validator');
const mysql = require('mysql2/promise');
const dbConfig = require('../config/database');

const informationController = async (req, res) => {
  try {
    // Validação dos dados recebidos do cliente
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { email, waterCups, bathroomVisits, involuntaryUrination, weight, height } = req.body;

    // Conectar ao banco de dados
    const connection = await mysql.createConnection(dbConfig);

    // Consultar o ID do usuário com base no e-mail
    const [user] = await connection.execute('SELECT id FROM usuarios WHERE email = ?', [email]);

    if (user.length === 0) {
      connection.end();
      return res.status(404).json({ success: false, error: 'Usuário não encontrado.' });
    }

    const user_id = user[0].id;

    // Inserir dados na tabela
    await connection.execute(`
      INSERT INTO informationUsers (user_id, water_cups, bathroom_visits, involuntary_urination, weight, height)
      VALUES (?, ?, ?, ?, ?, ?)
    `, [user_id, waterCups, bathroomVisits, involuntaryUrination, weight, height]);

    // Encerrar a conexão
    connection.end();

    return res.status(201).json({ success: true });
  } catch (error) {
    console.error('Erro ao salvar dados do usuário:', error);
    return res.status(500).json({ success: false, error: 'Erro interno no servidor.' });
  }
};

informationController.checkUserData = async (req, res) => {
  try {
    const { email } = req.params;

    // Conectar ao banco de dados
    const connection = await mysql.createConnection(dbConfig);

    // Consultar o ID do usuário com base no e-mail
    const [user] = await connection.execute('SELECT id FROM usuarios WHERE email = ?', [email]);

    if (user.length === 0) {
      connection.end();
      return res.status(404).json({ success: false, error: 'Usuário não encontrado.' });
    }

    const user_id = user[0].id;

    // Consultar se há dados associados ao usuário
    const [userData] = await connection.execute('SELECT id FROM informationUsers WHERE user_id = ?', [user_id]);

    // Encerrar a conexão
    connection.end();

    return res.status(200).json({ hasData: userData.length > 0 });
  } catch (error) {
    console.error('Erro ao verificar dados do usuário:', error);
    return res.status(500).json({ success: false, error: 'Erro interno no servidor.' });
  }
};


module.exports = informationController;
