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
  const { nome, cpf, telefone, email, senha } =
    req.body;

  const senhaHash = await bcrypt.hash(senha, saltRounds);

  const queryCadastro =
    "INSERT INTO cliente (cpf_cliente,email_cliente,nome_cliente, telefone_cliente, senha_cliente)" +
    "VALUES($1, $2, $3, $4, $5)";

  try {

        const resultado = await pool.query(queryCadastro, [
          cpf,
          email,
          nome,
          telefone,
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
app.post("/alugar/:id", async (req, res) => {
  const { idCarro } = req.body;

  const { id } = req.params;
  // const idN = id.t

  const queryAluguel =
    "INSERT INTO locacao_carro (id_carro, id_cliente) VALUES ($1,$2)";

  try {
    const resultado = await pool.query(queryAluguel, [id, 1]);
    res.status(201).json({ mensagem: "Aluguel em andamento." });
  } catch (err) {
    console.error(`Erro no aluguel: ${err}`);
    res.status(500).json({ mensagem: "Erro no aluguel" });
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

app.get("/alugueis", async (req,res) =>{
  const queryAlugueis = "SELECT carro.placa_carro, carro.modelo_carro FROM carro INNER JOIN locacao_carro on carro.id_carro = locacao_carro.id_carro";

  try {
const {rows} = await pool.query(queryAlugueis);
console.log(rows)
res.status(200).json(rows)
  } catch (err) {
console.error(`Erro na listagem de alugueis: ${err}`);
res.status(500).json({mensagem: 'Falha na listagem de alugueis.'})
  }
});
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${3000}`);
});

app.get("/filtros/:id", async (req,res) =>{

  const {idCliente} =req.params;

const queryFiltro = "SELECT cliente.nome_cliente, carro.placa_carro, carro.modelo_carro"+
"FROM carro"+
"INNER JOIN locacao_carro ON carro.id_carro = locacao_carro.id_carro"+
"INNER JOIN cliente ON cliente.id_cliente = locacao_carro.id_cliente WHERE cliente.id_cliente = $1;"

try {
const resultado = await pool.query(queryFiltro,[idCliente])

if (resultado.rows.length > 0) {
res.status(200).json(rows)
}else{
  res.status(404).json({mensagem: 'Não encontrado.'});
}
} catch (err) {
  console.error('Houve um erro ao buscar o cliente',err)
res.status(500).json({mensagem: 'Erro ao buscar cliente.'})
}
});

// tratar os erros
// jsonp
// formas de pagamento
// const queryCancelar
// const queryCancelar = "UPDATE locacoes"
