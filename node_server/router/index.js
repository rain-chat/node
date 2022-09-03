const express = require('express')
const fs = require('fs')
const path = require('path')
const mysql = require('../mysql')
const router = express.Router()
const { PageInfo } = require('../pageInfo')

router.get('/', (req, res) => {
  res.send("Server running");
})

router.post('/data', (req, res) => {
  let json = req.body
  let pageInfo = new PageInfo(json.pageSize, json.pageNum)
  let sql = `select * from article`
  mysql.select(sql).then(data => {
    sql += ` limit ${pageInfo.limit()} offset ${pageInfo.offset()}`
    mysql.select(sql).then(result => {
      let total = Math.ceil(data.length / pageInfo.pageSize)
      res.send(new PageInfo(pageInfo.pageSize, pageInfo.pageNum, total, result))
    })
  }).catch(err => {
    res.status(505)
    res.send(err)
  })
})

module.exports = router