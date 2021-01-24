const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
  res.json([
    {id: 1, username: 'Ankit'},
    {id: 2, username: 'Rajath'}
  ])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
