import dotenv from 'dotenv'
import mysql from 'mysql2'
dotenv.config()

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
})

connection.connect((err) => {
  if (err) {
    console.error('MYSQL Connect Fail : ', err)
    process.exit(0)
  }

  console.log('MYSQL Connect Success')
})
