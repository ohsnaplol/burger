var orm = require('../config/orm.js')

var burger = {
  getTable: function(cb) {
    orm.selectAll('burgers').then(function(result) {
      console.log(result)
      cb(result) //here
    }, function(err) {
      console.log(err)
    })
  },
  // by default, is not devoured
  add: function(name, cb) {
    orm.insertOne(name, false).then(function(result) {
      console.log(result)
      cb(result) 
    }, function(err) {
      console.log(err)
    })
  },
  // Set devoured to true at burger with id
  devour: function(id, cb) {
    orm.updateOne('devoured', true, 'id', id).then(function(result) {
      console.log(result)
      cb(result)
    }, function(err) {
      console.log(err)
    })
  }
}

module.exports = burger