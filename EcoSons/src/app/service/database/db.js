import pkg from "pg"

// a desestruturação facilita o uso direto do Pool
const {Pool} = pkg

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'EcoSons',
  password: 'postgres1',
  port: 5432
});

// async function verificarConexao(){

// let cliente

//   try {
// cliente = await pool.connect()

// console.log('Conexão com o banco de dados está aberta.')

// const result = await cliente.query('SELECT NOW()')

// console.log(`Resultado da consulta ${result}`)

//   } catch (error) {
// console.error(`Erro ao conectar ao banco de dados ${error}.`)
//   }finally{
//     if (cliente) {
//       // se estiver conectado libera a conexão
//       cliente.release();
//     }

//     //fecha a conexão(todas)
//     await pool.end()
//     console.log('Conexão com o banco de dados está fechada.');
//   }
// }

// verificarConexao()

export default pool;
