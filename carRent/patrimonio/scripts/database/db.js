import pkg from 'pg'

const {Pool} = pkg;

const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    database: 'patrimonios',
    host: 'localhost',
    port: 5432
})

// adicionar metodos de fechar/abrir conexões
// desestruturar cliente
// ayu one dark pro | moneray bordered