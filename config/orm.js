var connection = require('./connection.js')

var orm = {
    selectAll: function(from) {
        return new Promise(function(resolve, reject) {
            connection.query('SELECT * FROM ??', [from],function(error, result) {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    },
    insertOne: function(burger_name, devoured, date) {
        var queryString = 'INSERT INTO burgers(burger_name, devoured, date) VALUES(?, ?, ?)'
        return new Promise(function(resolve, reject) {
            connection.query(queryString,[burger_name, devoured, date], function(error, result) {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    },
    updateOne: function(whatToSet, setToWhat, where, is) {
        var queryString = 'UPDATE burgers SET ?? = ? WHERE ?? = ?'
        return new Promise(function(resolve, reject) {
            connection.query(queryString,[whatToSet, setToWhat, where, is], function(error, result) {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    }
}

module.exports = orm