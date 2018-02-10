var orm = require('../config/orm.js')

var burger = {
  getTable: function() {
    orm.selectAll('burgers')
  },
  // by default, is not devoured
  add: function(name) {
    orm.insertOne(name, 0)
  },
  // Set devoured to true at burger with id
  devour: function(id) {
    orm.updateOne('devoured', 1, 'id', id)
  }
}

module.exports = burger