import express from "express";
const app = express();
const PORT = 3000;

// rota para teste
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/cadastro", async (req, res) => {
  // recebendo dados
  const { nome, sobrenome, email, senha, celular, cep, cidade, estado } =
    req.body;


  //futuramente criar visões
  const queryCadastro =
    "INSERT INTO Cliente (cep_cliente, email_cliente, cidade_cliente, estado_cliente," +
    "sobrenome_cliente, nome_cliente, celular_cliente, senha_cliente)" +
    "VALUES(1$, 2$, 3$, 4$, 5$, 6$, 7$, 8$)";

  try {
const resultado = await poll.query(queryCadastro, [cep, email, cidade, estado, sobrenome, nome, celular, senha]);
console.lpg(resultado);
res.status(201).json(resultado.rows[0]);
  } catch (error) {
    res.status(500).send("Erro ao cadastrar usuário.");
    console.error(`Falha ao cadastrar usuário ${error}`);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${3000}`);
});
