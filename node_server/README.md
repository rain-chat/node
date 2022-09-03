# node + express 服务器
## 1. 错误记录
1. 未释放mysql连接池
```JavaScript
//vue 报错：
Proxy error: Could not proxy request /data from localhost:8080 to http://localhost:8088/.
See https://nodejs.org/api/errors.html#errors_common_system_errors for more information (ECONNREFUSED).
```
描述：前端发出请求，约前6次正常,之后约6次被挂起，再往后的请求被拒绝。
错误原因是从连接池取出连接执行select查询操作，但是没有释放连接。加入connection.release()后成功解决问题。
```JavaScript
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
```
