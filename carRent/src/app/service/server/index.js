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
  res.send('Hello World!');
});

app.post("/cadastro", async (req, res) => {
  // recebendo dados

  const { nome, cpf, telefone, email, senha } = req.body;

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
  const dataDv = new Date()
  const dataDl = new Date()
  const { id } = req.params;

  const queryAluguel =
    "INSERT INTO locacao_carro (id_carro, id_cliente) VALUES ($1,$2)";

  const queryAluguelDatas =
    "INSERT INTO datas_locacao (data_locacao, data_devolucao, id_cliente, id_carro) VALUES ($1,$2,$3,$4)";

  try {
    const resultado = await pool.query(queryAluguel, [id, 1]);
    const subResultado = await pool.query(queryAluguelDatas, [dataDl,dataDv,1, id]);
    console.log(resultado.rows);
    console.log(subResultado);
    res.status(201).json({ mensagem: "Aluguel em andamento." });

  } catch (err) {
    console.error(`Erro no aluguel: ${err}`);
    res.status(500).json({ mensagem: "Erro no aluguel" });
  }
});

app.get("/locacoes", async (req, res) => {
  const queryLocacoes = `SELECT *
FROM carro
RIGHT JOIN locacao_carro ON carro.id_carro = locacao_carro.id_carro
WHERE locacao_carro.id_carro IS NOT NULL

`;

  try {
    const { rows } = await pool.query(queryLocacoes);
    console.log(`Listagem ${rows}`);
    res.status(200).json(rows);
  } catch (err) {
    console.error(`Erro ao listar carros do banco de dados ${err}`);
    res.status(500).json({ mensagem: "Erro ao listar." });
  }
});

// validar clicks

app.get("/alugueis", async (req, res) => {
  const queryAlugueis =
    "SELECT carro.placa_carro, carro.modelo_carro FROM carro INNER JOIN datas_locacao on carro.id_carro = datas_locacao.id_carro";

  try {
    const { rows } = await pool.query(queryAlugueis);
    console.log(rows);
    res.status(200).json(rows);
  } catch (err) {
    console.error(`Erro na listagem de alugueis: ${err}`);
    res.status(500).json({ mensagem: "Falha na listagem de alugueis." });
  }
});
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${3000}`);
});

app.get("/filtros/:id", async (req, res) => {
  // estarindo o parametro, tem que ser o nome dele
  const { id } = req.params;

  const queryFiltro = `SELECT cliente.nome_cliente, carro.placa_carro, carro.modelo_carro
FROM carro
INNER JOIN locacao_carro ON carro.id_carro = locacao_carro.id_carro
INNER JOIN cliente ON cliente.id_cliente = locacao_carro.id_cliente WHERE cliente.id_cliente = $1;`;

  try {
    const { rows } = await pool.query(queryFiltro, [id]);

    console.log(rows);
    if (rows.length > 0) {
      res.status(200).json(rows);
      console.log("Filtro realizado com sucesso.");
    } else {
      res.status(404).json({ mensagem: "Não encontrado." });
    }
  } catch (err) {
    console.error("Houve um erro ao buscar o cliente", err);
    res.status(500).json({ mensagem: "Erro ao buscar cliente." });
  }
});

app.get("/filtros-datas", async (req, res) => {
    const { data_locacao, data_devolucao } = req.body;

    console.log(req.body);

    const queryFiltroData = `SELECT
cliente.nome_cliente,
carro.placa_carro,
carro.modelo_carro
FROM
carro
INNER JOIN
locacao_carro ON carro.id_carro = locacao_carro.id_carro
INNER JOIN
cliente ON cliente.id_cliente = locacao_carro.id_cliente
WHERE
datas_locacao.data_locacao = $1 AND datas_locacao.data_devolucao = $2;`;

    try {
      const { rows } = await pool.query(queryFiltroData, [
        data_locacao,
        data_devolucao,
      ]);
      console.log(rows);
      if (rows.length > 0) {
        res.status(200).json(rows);
      } else {
        res.status(404).json({ mensagem: "Não encontrado." });
      }
    } catch (err) {
      console.error(`Houve um erro, verifique as datas ${err}`);
    }
  });

  app.post("/finalizar", async (req,res) =>{
const queryFinalizar = "DELETE FROM datas_locacao"

try {
const resultado = await pool.query(queryFinalizar)

console.log(resultado)
res.status(200).json({mensagem: 'Alugueis finalizados'});
} catch (err) {
console.error('Erro ao finalizar alugueis',err)
res.status(500).json({mensagem: 'Erro'})
}
  });
// jsonp

