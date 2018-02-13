var express = require('express.js')
var burger = require('../models/burger.js')
var router = express.Router()

router.get('/', function(request, response) {
  burger.getTable(function(data) {
    response.render('index', { cats: data })
  })
})

router.post('/api/cats', function(request, response) {
  burger.add(request.body.name)
  response.json({response})
})

router.put('api/cats/:id', function(request,response) {
  burger.devour(request.params.id)
  // response.json({response})
})

modules.exports = router