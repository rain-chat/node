const express = require('express')
const router = require('./router')
const app = express()
const port = 8088

const bodyParser = require('body-parser')
const { all } = require('./router')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => {
  console.info(`http://localhost:${port}`)
})

app.use(router)

app.use((err, req, res, next) => {
  res.status(500).send('Something broke!')
  res.status(404).send("Sorry can't find that!")
  res.status(407).send("Loop")
  if (err) {
    res.send()
  }
  next()
})

