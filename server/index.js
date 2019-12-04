require('dotenv').config()
const express = require('express'),
      ctrl = require('./controller'),
      app = express(),
      gradient = require('gradient-string'),
      massive = require('massive'),
      {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())

//Endpoints

app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.createProduct)
app.delete('/api/product/:id', ctrl.deleteProduct)


massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(gradient.fruit(`A long time ago in a galaxy far, far away... this server ran on port ${SERVER_PORT}`)))
}).catch(err => console.log(err, `this isn't the database you're looking for`))