const mysql = require('mysql')

const connnectPool = mysql.createPool({
  dateStrings: true,
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '2796',
  database: 'node'
})

function select(sql) {
  return new Promise((resolve, reject) => {
    connnectPool.getConnection((err, connection) => {
      if (err) reject("Database connection failed.")
      else connection.query(sql, (err, data) => {
        if (err) {
          reject("SQL err or the database does not exist.")
        }
        else resolve(data)
      })
      connection.release()
    })
  })
}

module.exports = {
  connnectPool,
  select
}