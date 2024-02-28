const express = require("express")
const bodyParser = require("body-parser")
const productsBase = require('./products-base.json')

const PORT = 3001

const app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
})

let products = productsBase;

app.get('/products', (req, res) => {
  res.json(products)
})

app.listen(PORT, () => {
  console.log(`App running in http://localhost:${PORT}`)
})