const express = require('express')
const {format} = require('date-fns')

const app = express()

app.get('/', (req, res) => {
  const today = new Date()
  const formattedDate = format(today, 'dd-MM-yyyy')
  res.send(formattedDate)
})

app.listen(3000)

module.exports = app
