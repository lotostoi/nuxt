const express = require('express')
const fs = require('fs')
const app = express()
const mongoose = require('mongoose')
const { connectDb } = require('./helpers/db')
const { PORT } = require('./config')

/* const postSchema = new mongoose.Schema({
  name: String
})

const post = new mongoose.Model("Post", postSchema) */

app.use(express.json())

const startServer = () => {
  app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
}

const linkToCart = __dirname + '/db/cart.json'
const linkToCatalog = __dirname + '/db/catalog.json'

app.get('/my-test', (req, res) => {
  res.send('start doker ...')
})

app.get('/test/catalog', (req, res) => {

  fs.readFile(linkToCatalog, 'utf-8', (err, data) => {
    if (err) {
      return res.json({ result: true })
    }
    res.json(JSON.parse(data))
  })
})

app.get('/test/cart', (req, res) => {
  fs.readFile(linkToCart, 'utf-8', (err, data) => {
    if (err) {
      return res.json({ error: true })
    }
    res.json(JSON.parse(data))
  })
})

app.post('/test/cart/add', (req, res) => {
  fs.readFile(linkToCart, 'utf-8', (err, data) => {
    if (err) {
      return res.json({ result: false })
    }
    const cartItems = JSON.parse(data)
    cartItems.push(req.body)
    fs.writeFile(linkToCart, JSON.stringify(cartItems), (err) => {
      if (err) {
        return res.json({ result: false })
      }
      return res.json({ result: true })
    })
  })
})

app.put('/test/cart/inc/:id', (req, res) => {
  fs.readFile(linkToCart, 'utf-8', (err, data) => {
    if (err) {
      return res.json({ result: false })
    }
    const cartItems = JSON.parse(data)
    const item = cartItems.find(({ id }) => +id === +req.params.id)
    item.amount++
    fs.writeFile(linkToCart, JSON.stringify(cartItems), (err) => {
      if (err) {
        return res.json({ result: false })
      }
      return res.json({ result: true })
    })
  })
})

app.put('/test/cart/dec/:id', (req, res) => {
  fs.readFile(linkToCart, 'utf-8', (err, data) => {
    if (err) {
      return res.json({ result: false })
    }
    const cartItems = JSON.parse(data)
    const item = cartItems.find(({ id }) => +id === +req.params.id)
    item.amount--
    fs.writeFile(linkToCart, JSON.stringify(cartItems), (err) => {
      if (err) {
        return res.json({ result: false })
      }
      return res.json({ result: true })
    })
  })
})

app.delete('/test/cart/delete/:id', (req, res) => {
  fs.readFile(linkToCart, 'utf-8', (err, data) => {
    if (err) {
      return res.json({ result: false })
    }
    const cartItems = JSON.parse(data).filter(({ id }) => +id !== +req.params.id)
    fs.writeFile(linkToCart, JSON.stringify(cartItems), (err) => {
      if (err) {
        return res.json({ result: false })
      }
      return res.json({ result: true })
    })
  })
})



connectDb()
  .on('error', console.log)
  .on('disconnected', connectDb)
  .once('open', startServer)