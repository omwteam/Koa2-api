const Koa = require('koa');
const app = new Koa();
const logger = require('koa-logger');
const path = require('path');
const server = require('koa-static');
const views = require('koa-views');
const bodyParser = require('koa-bodyparser');
const router = require('./routes/main');
const errorHandle = require('./middleware/errorHandle');
const jwt = require('koa-jwt');
const secret = 'albeanfengFFFFFDDDDDBBBBB';

app.use(function(ctx, next){
    if (ctx.url.match(/^\/public/)) {
        ctx.body = 'unprotected\n';
    } else {
        return next();
    }
});

app.use(jwt({
    secret,
}).unless({
    path: [/\/api\/register/, /\/api\/login/,/^\/resource/,/\/api\/doRegister/,/\/api\/*/,/\/admin\/*/,]
}));

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './public';
app.use(server(staticPath));
app.use(bodyParser());
app.use(logger());
// app.use(errorHandle);

// 加载模板引擎
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}));

app.use(router.routes())
    .use(router.allowedMethods());

app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});
app.listen(3000);
console.log('[demo] start-quick is starting at port 3000');
