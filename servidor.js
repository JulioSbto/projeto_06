const db = require('./conexao');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// READ - Lista todos os inventários
app.get('/inventarios', (req, res) => {
    db.query('SELECT * FROM tb_inventarios', (erro, resultado) => {
        if (erro) return res.json({ mensagem: "Falha ao consultar inventários"+erro.message});
        return res.json(resultado);
    });
});

// READ - Busca um inventário por código
app.get('/inventarios/:codigo', (req, res) => {
    const { codigo } = req.params;
    db.query('SELECT * FROM tb_inventarios WHERE codigo = ?', [codigo], (erro, resultado) => {
        if (erro) return res.json({ mensagem: "Falha ao consultar inventário"+erro.message });
        return res.json(resultado);
    });
});

// CREATE - Cadastra novo inventário
app.post('/inventarios', (req, res) => {
    const { codigo, descricao, setor, categoria } = req.body;
    db.query(`INSERT INTO tb_inventarios (codigo, descricao, setor, categoria) VALUES (?, ?, ?, ?)`,
        [codigo, descricao, setor, categoria],
        (erro, resultado) => {
            if (erro) return res.json({ msg: "Falhou ao cadastrar"+erro.message });
            return res.json({ msg: "Cadastrado com sucesso" });
        }
    );
});

// UPDATE - Atualiza inventário
app.put('/inventarios', (req, res) => {
    const { codigo, descricao, setor, categoria } = req.body;
    db.query(`UPDATE tb_inventarios SET descricao = ?, setor = ?, categoria = ? WHERE codigo = ?`,
        [descricao, setor, categoria, codigo],
        (erro, resultado) => {
            if (erro) return res.json({ msg: "Falha ao atualizar"+erro.message });
            if (resultado.affectedRows === 0) return res.json({ msg: "Nada alterado" });
            return res.json({ msg: "Atualizado com sucesso" });
        }
    );
});

// DELETE - Remove um inventário
app.delete('/inventarios', (req, res) => {
    const { codigo } = req.body;
    db.query('DELETE FROM tb_inventarios WHERE codigo = ?', [codigo], (erro, resultado) => {
        if (erro) return res.json({ msg: "Falha ao deletar"+erro.message });
        if (resultado.affectedRows === 0) return res.json({ msg: "Nada alterado" });
        return res.json({ msg: "Deletado com sucesso" });
    });
});

app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000');
});