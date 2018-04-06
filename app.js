const Koa = require('koa');
const app = new Koa();
const router = require('./routes/main');
// const path = require('path');
const server = require('koa-static2');
// const views = require('koa-views');

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './public';
app.use(server(staticPath));


// 加载模板引擎
// app.use(views(path.join(__dirname, './public/views'), {
//     extension: 'ejs'
// }));


app.use(router.routes())
    .use(router.allowedMethods());
app.listen(3000);
console.log('[demo] start-quick is starting at port 3000');
