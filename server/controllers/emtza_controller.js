var bl = require('../data/bl');

// CRUD
function read(callback) {

    bl.customers.getEmtza(function(err, custArray) {
        if (err) {
            callback(err);
        }

        callback(null, custArray);
    })
}


module.exports.Read = read;
