import express from "express";
import pool from "../database/db.js";
import bcrypt from "bcrypt";
import cors from "cors";

const app = express();
const PORT = 3000;
const saltRounds = 10;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/cadastro", async (req, res) => {
  // como sabe a ordem e quem é   uem, tat, csl
  const { nome, email, senha } = req.body;

  const senhaHash = await bcrypt.hash(senha, saltRounds);
  const queryCadastro =
    "INSERT INTO usuarios (nome_usuario, email_usuario, senha_usuario) Values ($1, $2, $3)";

  try {
    const resultado = await pool.query(queryCadastro, [nome, email, senhaHash]);
    res.status(201).json(resultado.rows[0]);
  } catch (error) {
    console.error(`Falha ao cadastar usuário ${error}.`);
    res.status(500).send("Falha ao cadastrar.");
  }
});

app.post("/login", async (req, res) => {
  const { email, senha } = req.body;
  const queryLogin =
    "SELECT email_usuario, senha_usuario FROM usuarios WHERE email_usuario = $1";
  try {
    const resultado = await pool.query(queryLogin, [email]);

    if (resultado.rows.length > 0) {
      const user = resultado.rows[0]; //email que foi encontrado

      const senhaValida = await bcrypt.compare(senha, user.senha_usuario);

      console.log(`Senha ${senhaValida}`);

      if (senhaValida) {
        console.log("Senha valida, redirecionando...");
        res.status(200).json({ message: "Login realizado com sucesso." });
      } else {
        res.status(404).json({ message: "Erro usuário não encontrado." });
      }
    } else {
      res.status(404).json({ message: "Usuário não encontrado." });
    }
  } catch (err) {
    console.error(`Erro ao logar ${err}`);
    res.status(505).json({message: "Erro ao realizar login."})
  }
});
app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
