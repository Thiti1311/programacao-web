// Importe as bibliotecas necessárias
const mysql = require('mysql2/promise');
const dbConfig = require('../config/database');

// Controller para obter os totais dos últimos 7 dias para um usuário específico
const totalsController = async (req, res) => {
  try {
    // Obter o e-mail do parâmetro da requisição
    const email = req.params.email;

    // Conectar ao banco de dados
    const connection = await mysql.createConnection(dbConfig);

    // Consultar o ID do usuário com base no e-mail
    const [user] = await connection.execute('SELECT id FROM usuarios WHERE email = ?', [email]);

    if (user.length === 0) {
      // Se o usuário não for encontrado, encerrar a conexão e retornar um erro
      connection.end();
      return res.status(404).json({ success: false, error: 'Usuário não encontrado.' });
    }

    const user_id = user[0].id;

    // Consultar os totais dos últimos 7 dias para o usuário específico
    const [result] = await connection.query(
      'SELECT SUM(water_count) AS totalWater, SUM(bathroom_count) AS totalBathroom, SUM(leakage_count) AS totalLeakage FROM dayperday WHERE user_id = ? AND date >= CURDATE() - INTERVAL 7 DAY',
      [user_id]
    );

    // Encerrar a conexão
    connection.end();

    // Enviar os resultados para o frontend
    res.status(200).json({ success: true, data: result[0] });
  } catch (error) {
    console.error('Erro ao obter totais dos últimos 7 dias para o usuário específico:', error);
    res.status(500).json({ success: false, error: 'Erro interno no servidor.' });
  }
};

// Exportar o controller
module.exports = totalsController;
