// Step 1
const mysql = require('mysql');

// Step 2
function connection(callback) {
    const con = mysql.createConnection(
        // connection details
        {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'northwind'
        }
    );
    con.connect(function(err) {
        if (err) {
            callback('Error connecting to DB:' + err);
            return;
        }
        callback(null, con);
    });

}


function getProuducts(tableName, calkback) {
    connection(function(err, con) {
        if (err) {
            callback('Error connecting to DB:' + err);
        } else {
            let sql = `select * from ${tableName}`;
            con.query(sql , function(err, rows) {
                if (err) calkback(err);
                    calkback(null, rows);
            });
        }
    });
}


function setProuducts(getData, callback){
     data = JSON.parse(getData);
    connection(function(err, con) {
        if (err) {
            callback('Error connecting to DB:' + err);
        } else {
            let column;
            let values;
            switch(data.tableName){
                case "products":
                column="ProductName, QuantityPerUnit, ReorderLevel, SupplierID, UnitPrice, UnitsInStock, UnitsOnOrder";
                values=`'${data.ProductName}', '${data.QuantityPerUnit}', ${data.ReorderLevel}, ${data.SupplierID}, ${data.UnitPrice}, ${data.UnitsInStock}, ${data.UnitsOnOrder}`;
                break;
                case "shippers":
                column="CompanyName, Phone";
                values=`'${data.CompanyName}', ${data.Phone}`;
                break;s
            }
            let sql = "INSERT INTO " + data.tableName + " (" + column + ") VALUES (" + values + ")";
            con.query(sql, function (err, result) {
                if (err) console.log(err);
                callback(null, "1 record inserted");
              });
                            }
                
        });

}      


    

// module.exports.getShippers = getShippers;
// module.exports.getSuplliers = getSuplliers;
module.exports.getProuducts = getProuducts;
module.exports.setProuducts = setProuducts;


