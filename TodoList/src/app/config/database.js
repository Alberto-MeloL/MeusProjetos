import pg from "pg";
const {Pool} = pg;

import dotenv from "dotenv";
dotenv.config;

// instancia da conexão com o banco de dados

const pool = new Pool({
host: process.env.DATABASE_HOST,
user: process.env.DATABASE_USER,
password: process.env.DATABASE_PASSWORD,
database: process.env.DATABASE_DATABASE,
port: process.env.DATABASE_PORT
});

export default pool;
