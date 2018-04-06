const allConfig = require("./../config");
const config = allConfig.database;
const mysql = require("mysql");

const pool = mysql.createPool({
    host     :  config.HOST,
    user     : config.USERNAME,
    password : config.PASSWORD,
    database : config.DATABASE
});

let query = function( sql, values ) {

    return new Promise(( resolve, reject ) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                resolve( err )
            } else {
                connection.query(sql, values, ( err, rows) => {

                    if ( err ) {
                        reject( err )
                    } else {
                        resolve( rows )
                    }
                    connection.release()
                })
            }
        })
    })

};

let createTable = function( sql ) {
    return query( sql, [] )
};


let find = function( table,  id ) {
    let  _sql =  "SELECT * FROM ?? WHERE id = ? ";
    return query( _sql, [ config.prefix + table, id ] )
};


let findDataByPage = function( table, keys, start, end ) {
    let  _sql =  "SELECT ?? FROM ??  LIMIT ? , ?";
    return query( _sql, [keys,  config.prefix + table,  start, end ] )
};


let insert = function( table, values ) {
    let _sql = "INSERT INTO ?? SET ?";
    return query( _sql, [ config.prefix + table, values ] )
};


let update = function( table, values, id ) {
    let _sql = "UPDATE ?? SET ? WHERE id = ?";
    return query( _sql, [ config.prefix + table, values, id ] )
};


let del = function( table, id ) {
    let _sql = "DELETE FROM ?? WHERE id = ?";
    return query( _sql, [ config.prefix + table, id ] )
};


let select = function( table, keys ) {
    let  _sql =  "SELECT ?? FROM ?? ";
    return query( _sql, [ keys, config.prefix + table ] )
};

let count = function( table ) {
    let  _sql =  "SELECT COUNT(*) AS total_count FROM ?? ";
    return query( _sql, [ config.prefix + table ] )
};

module.exports = {
    query,
    createTable,
    find,
    findDataByPage,
    del,
    insert,
    update,
    select,
    count,
};