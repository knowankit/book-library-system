const express = require('express')
const fs = require('fs');
const app = express()
const port = 3001

app.get('/books', (req, res) => {
  const rawdata = fs.readFileSync('books.json')
  const jsonData = JSON.parse(rawdata)

  res.send(jsonData)
})

app.listen(port, () => {
  console.log(`Book Library app listening at http://localhost:${port}`)
})
