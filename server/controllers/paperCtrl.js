var bl = require('../data/bl');

// CRUD
function getlastpaper(name, callback) {
    let tableName = name;

    bl.papers.getlastpapaer(tableName, function(err, num) {
        if (err) {
            callback(err);
        }

        callback(null, num);
    })
}


module.exports.getlastpaper = getlastpaper;