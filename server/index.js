const express = require('express')
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express()
const port = 3001

app.use(bodyParser.json());

app.get('/books', (req, res) => {
  const rawdata = fs.readFileSync('books.json')
  const jsonData = JSON.parse(rawdata)

  res.send(jsonData)
})

app.post('/book', (req, res) => {
  const book = {
    _id: req.body['_id'],
    title: req.body['title'],
    shortDescription: req.body['shortDescription'],
    thumbnailUrl: req.body['thumbnailUrl'],
    author: req.body['author'],
    pageCount: req.body['pageCount']
  }

  const rawdata = fs.readFileSync('books.json')
  const jsonData = JSON.parse(rawdata)

  jsonData.push(book)

  const data = JSON.stringify(jsonData, null, 2)
  fs.writeFileSync('books.json', data);

  res.sendStatus(200);
})

app.put('/book', (req, res) => {
  const book = {
    _id: req.body['_id'],
    title: req.body['title'],
    shortDescription: req.body['shortDescription'],
    thumbnailUrl: req.body['thumbnailUrl'],
    author: req.body['author'],
    pageCount: req.body['pageCount']
  }

  const rawdata = fs.readFileSync('books.json')
  const jsonData = JSON.parse(rawdata)

  const filteredDataIndex = jsonData.map(function(b) {return b._id; }).indexOf(book._id);

  jsonData.splice(filteredDataIndex, 1, book)

  const data = JSON.stringify(jsonData, null, 2)
  fs.writeFileSync('books.json', data);

  res.sendStatus(200);
})

app.delete('/book', (req, res) => {
  const bookId = req.body['_id']

  const rawdata = fs.readFileSync('books.json')
  const jsonData = JSON.parse(rawdata)

  const filteredDataIndex = jsonData.map(function(b) {return b._id; }).indexOf(bookId);

  jsonData.splice(filteredDataIndex, 1)

  const data = JSON.stringify(jsonData, null, 2)
  fs.writeFileSync('books.json', data);

  res.sendStatus(200);
})


app.listen(port, () => {
  console.log(`Book Library app listening at http://localhost:${port}`)
})
