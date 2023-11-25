const mysql = require('mysql2/promise');
const dbConfig = require('../config/database');

const infoLogController = async (req, res) => {
  try {
    const { email, info_type, info_value } = req.body || {};

    // Certifique-se de que nenhum parâmetro seja undefined
    if (email === undefined || info_type === undefined || info_value === undefined) {
      return res.status(400).json({ success: false, error: 'Parâmetros vazios.' });
    }

    // Conectar ao banco de dados
    const connection = await mysql.createConnection(dbConfig);

    // Obter user_id com base no e-mail
    const [user] = await connection.execute('SELECT id FROM usuarios WHERE email = ?', [email]);

    if (user.length === 0) {
      connection.end();
      return res.status(404).json({ success: false, error: 'Usuário não encontrado.' });
    }

    const user_id = user[0].id;

    // Obter dayperday_id correspondente à data atual
    const [dayperday] = await connection.execute(
      'SELECT id FROM dayperday WHERE user_id = ? AND DATE(date) = CURDATE()',
      [user_id]
    );

    if (dayperday.length === 0) {
      connection.end();
      return res.status(404).json({ success: false, error: 'Dados do dia atual não encontrados.' });
    }

    const dayperday_id = dayperday[0].id;

    // Inserir dados na tabela info_log
    await connection.execute(
      'INSERT INTO info_log (dayperday_id, info_type, info_value) VALUES (?, ?, ?)',
      [dayperday_id, info_type, info_value]
    );

    // Encerrar a conexão
    connection.end();

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erro ao inserir dados na tabela info_log:', error);
    return res.status(500).json({ success: false, error: 'Erro interno no servidor.' });
  }
};

module.exports = infoLogController;
