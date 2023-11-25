const mysql = require('mysql2/promise');
const dbConfig = require('../config/database');

const userDataController = async (req, res) => {
  try {
    const { email, water_count, bathroom_count, leakage_count } = req.body;

    // Conectar ao banco de dados
    const connection = await mysql.createConnection(dbConfig);

    // Consultar o ID do usuário com base no e-mail
    const [user] = await connection.execute('SELECT id FROM usuarios WHERE email = ?', [email]);

    if (user.length === 0) {
      connection.end();
      return res.status(404).json({ success: false, error: 'Usuário não encontrado.' });
    }

    const user_id = user[0].id;

    // Verificar se já existe uma coleção para o usuário na data atual
    const [existingData] = await connection.execute(
      'SELECT * FROM dayperday WHERE user_id = ? AND DATE(date) = CURDATE()',
      [user_id]
    );

    if (existingData.length === 0) {
      // Se não existe, insira um novo registro
      await connection.execute(
        'INSERT INTO dayperday (user_id, water_count, bathroom_count, leakage_count, date) VALUES (?, ?, ?, ?, NOW())',
        [user_id, water_count, bathroom_count, leakage_count]
      );
    } else {
      // Se já existe, atualize os dados na coleção atual
      await connection.execute(
        'UPDATE dayperday SET water_count = ?, bathroom_count = ?, leakage_count = ?, date = NOW() WHERE user_id = ? AND DATE(date) = CURDATE()',
        [water_count, bathroom_count, leakage_count, user_id]
      );
    }

    // Encerrar a conexão
    connection.end();

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erro ao atualizar dados do usuário:', error);
    return res.status(500).json({ success: false, error: 'Erro interno no servidor.' });
  }
};

userDataController.getLastDataController = async (req, res) => {
  try {
    const email = req.params.email;

    // Conectar ao banco de dados
    const connection = await mysql.createConnection(dbConfig);

    // Consultar o ID do usuário com base no e-mail
    const [user] = await connection.execute('SELECT id FROM usuarios WHERE email = ?', [email]);

    if (user.length === 0) {
      connection.end();
      return res.status(404).json({ success: false, error: 'Usuário não encontrado.' });
    }

    const user_id = user[0].id;

    // Consultar os últimos dados do usuário
    const [lastData] = await connection.execute(
      'SELECT * FROM dayperday WHERE user_id = ? ORDER BY date DESC LIMIT 1',
      [user_id]
    );

    // Encerrar a conexão
    connection.end();

    if (lastData.length === 0) {
      // Se não há dados na tabela dayperday, não precisa chamar a função do controller novamente
      return res.status(200).json({ success: true, data: null });
    }
    
    return res.status(200).json({ success: true, data: lastData[0] });

  } catch (error) {
    console.error('Erro ao obter os últimos dados do usuário:', error);
    return res.status(500).json({ success: false, error: 'Erro interno no servidor.' });
  }
};

module.exports = userDataController;
