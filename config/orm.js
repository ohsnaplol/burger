var connection = require('./connection.js')

var orm = {
    selectAll: function() {
        return new Promise(function(resolve, reject) {
            connection.query('SELECT * FROM ??')
        })
    },
    insertOne: function() {
        return new Promise(function(resolve, reject) {
            connection.query('INSERT INTO burgers(burger_name, devoured, date) VALUES(??, ??, ??)')
        })
    },
    updateOne: function() {
        return new Promise(function(resolve, reject) {
            connection.query() 
        })
    }
}