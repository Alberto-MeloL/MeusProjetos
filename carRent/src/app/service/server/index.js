import express from "express";
import pool from "../database/db.js";
import cors from "cors";
import bcrypt from "bcrypt";

const app = express();
const PORT = 3000;
const saltRounds = 10;

app.use(cors());
app.use(express.json());

// rota para teste
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/cadastro", async (req, res) => {
  // recebendo dados
  const { nome, cpf, telefone, email, senha } = req.body;

  const senhaHash = await bcrypt.hash(senha, saltRounds);

  const queryCadastro =
    "INSERT INTO cliente ( nome_cliente, cpf_cliente, telefone_cliente,email_cliente, senha_cliente)" +
    "VALUES($1, $2, $3, $4, $5)";

  try {
    const resultado = await pool.query(queryCadastro, [
      nome,
      cpf,
      telefone,
      email,
      senhaHash,
    ]);
    console.log(resultado);
    res.status(201).json(resultado.rows[0]);
  } catch (error) {
    res.status(500).send("Erro ao cadastrar usuário.");
    console.error(`Falha ao cadastrar usuário ${error}`);
  }
});

app.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  const queryLogin =
    "SELECT email_cliente, senha_cliente FROM cliente WHERE email_cliente = $1";

  try {
    const resultado = await pool.query(queryLogin, [email]);

    if (resultado.rows.length > 0) {
      const usuario = resultado.rows[0];

      const senhaValida = bcrypt.compare(senha, usuario.senha_cliente);

      console.log("A senha é válida.");

      if (email && senhaValida) {
        console.log("Redirecionando...");
        res.status(200).json({ mensagem: "Login bem sucedido." });
      } else {
        res.status(404).json({ mensagem: "Senha inválida." });
      }
    } else {
      res.status(404).json({ mensagem: "Algo deu errado." });
    }
  } catch (err) {
    console.error("Houve um erro ao realizar login", err);
    res.status(505).json({ mensagem: "Erro no login" });
  }
});
// chave
app.post("/alugar",
  async (req, res) => {
    const {
      email,
      placa_carro,
      cpf,
      data_aluguel,
      data_inicio,
      data_fim,
      forma_pagamento,
    } = req.body;

    const queryAluguel =
      "INSERT INTO locacoes (email_usuario, placa_carro, data_aluguel, data_inicio, data_fim, forma_pagamento) VALUES ($1,$2,$3,$4,$5,$6)";

    // tratar os erros

    // jsonp

    try {
      const resultado = await pool.query(queryAluguel, [email, placa_carro, cpf, data_aluguel, data_inicio, data_fim, 'Pendente']);
      if(resultado.rows.length > 0){
res.status(201).json({mensagem: "Aluguel em andamento."})
        console.log(`Aluguel realizado com sucesso, sendo: ${data_inicio} á ${data_fim}, feito em ${data_aluguel}`)
      }else{
        res.status(404).json({mensagem: "Erro ao finalizar o aluguel."})
      }
    } catch (err) {
      res.status(500).json({mensagem: "Falha ao finalizar o aluguel."})
      console.error(`Houve um erro ao finalizar o aluguel: ${err}`);
    }
  });


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${3000}`);
});
