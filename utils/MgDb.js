const mongoose = require('mongoose');
const db = mongoose.connection;
mongoose.connect('mongodb://localhost:27017/omwteam'); // 数据库名称为test
db.on('connected', () => {
    console.log('连接成功');
});
db.on('error', (err) => {
    console.log('连接失败: ' + err);
});

module.exports = db;