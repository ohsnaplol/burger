var orm = require('../config/orm.js')

var burger = {
  getTable: function() {
    orm.selectAll('burgers').then(function(result) {
      console.log(result)
      return result
    }, function(err) {
      console.log(err)
    })
  },
  // by default, is not devoured
  add: function(name) {
    orm.insertOne(name, 0).then(function(result) {
      console.log(result)
      return result
    }, function(err) {
      console.log(err)
    })
  },
  // Set devoured to true at burger with id
  devour: function(id) {
    orm.updateOne('devoured', 1, 'id', id).then(function(result) {
      console.log(result)
      return result
    }, function(err) {
      console.log(err)
    })
  }
}

module.exports = burger