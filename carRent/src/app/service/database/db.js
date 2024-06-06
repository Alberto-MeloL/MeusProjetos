import pkg from "pg";

const {Pool} = pkg;

const pool = new Pool({
user: 'postgres',
password: 'postgres1',
host: 'localhost',
database: 'locadora',
port: 5432
});

// exportar para ficar acessível para outros arquivos
export default pool;
