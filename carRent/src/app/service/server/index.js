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
  const { cep, estado, sobrenome, nome, cidade, telefone, email, senha } =
    req.body;

  const senhaHash = await bcrypt.hash(senha, saltRounds);

  const queryCadastro =
    "INSERT INTO cliente ( cep_cliente, email_cliente, cidade_cliente, estado_cliente, sobrenome_cliente, nome_cliente, celular_cliente, senha_cliente)" +
    "VALUES($1, $2, $3, $4, $5, $6, $7, $8)";

  try {
    const resultado = await pool.query(queryCadastro, [
      cep,
      email,
      cidade,
      estado,
      sobrenome,
      nome,
      telefone,
      senhaHash,
    ]);
    // =======
    //     const resultado = await pool.query(queryCadastro, [
    //       nome,
    //       cpf,
    //       telefone,
    //       email,
    //       senhaHash,
    //     ]);
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

      if (senhaValida) {
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
app.post("/alugar/:id", async (req, res) => {
  const { dataLocacao, dataDevolucao, valorTotal } = req.body;
  const id = req.params.id;
  console.log('requisicao do body',req.body);
  console.log(id);
  const queryAluguel =
    "INSERT INTO locacao (data_locacao, data_devolucao, valor_total, id_cliente, id_carro) VALUES ($1,$2,$3,$4,$5)";

  try {
    const resultado = await pool.query(queryAluguel, [
      '20-5-2024',
      '20-12-2005',
      valorTotal,
      1,
      id,
    ]);
    console.log(resultado.fields);

    if (resultado.rows.length > 0) {
      console.log("Aluguel em andamento.");
      res.status(201).json(resultado.rows);
    } else {
      res.status(404).json({ mensagem: "Oops, algo deu errado" });
    }
  } catch (err) {
    console.error(`Erro ao finalizar o aluguel ${err}`);
    res.status(500).json({ mensagem: "Erro ao alugar." });
  }
});

app.get("/locacoes", async (req, res) => {
  const queryLocacoes = "SELECT * FROM carro;";

  try {
    const { rows } = await pool.query(queryLocacoes);
    console.log(`Listagem ${rows}`);
    res.status(200).json(rows);
  } catch (err) {
    console.error(`Erro ao listar carros do banco de dados ${err}`);
    res.status(500).json({ mensagem: "Erro ao listar." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${3000}`);
});
