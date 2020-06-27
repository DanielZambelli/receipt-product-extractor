const fs = require('fs')
const express = require('express')
const server = express()

server.use(require('cors')())
server.use(express.static('public'))

const { Products } = require('./models')
const fetchTextFromImage = require('./services/fetchTextFromImage')

const viewIndex = fs.readFileSync('./view/index.html').toString()
server.get('/', async (req,res) => {
  const [productsA, productsB, productsC] = await Promise.all([
    fetchTextFromImage('./public/receipt-a.jpg').then(Products.getMatching),
    fetchTextFromImage('./public/receipt-b.jpg').then(Products.getMatching),
    fetchTextFromImage('./public/receipt-c.jpg').then(Products.getMatching),
  ])
  let view = viewIndex
    .replace('%%products-a%%', productsA.map(product => `${product.title}<br/>`).join('') )
    .replace('%%products-b%%', productsB.map(product => `${product.title}<br/>`).join('') )
    .replace('%%products-c%%', productsC.map(product => `${product.title}<br/>`).join('') )
  res.send(view)
})

server.listen(process.env.PORT, () => {
  console.log(`server listning on port ${process.env.PORT}`)
})
