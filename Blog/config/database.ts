import pg from "pg";
const {Pool} = pg;

import dotenv from "dotenv";
dotenv.config();


const {
  DATABASE_HOST,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME,
  DATABASE_PORT,
} = process.env;

if (!DATABASE_HOST || !DATABASE_USER || DATABASE_PASSWORD || DATABASE_NAME ||DATABASE_PORT) {
throw new Error("Por favor, defina todas as variáveis de ambiente.")
}

// instancia da conexão com o banco de dados
 const pool = new Pool({
host: DATABASE_HOST as string,
user: DATABASE_USER as string,
password: DATABASE_PASSWORD as string,
database: DATABASE_NAME as string,
port: Number(DATABASE_PORT)
});

export default pool;
