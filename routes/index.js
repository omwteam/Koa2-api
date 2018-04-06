const Router = require('koa-router');
const router = new Router();


router.get('/', async (ctx, next) => {

    // let title = 'hello koa2';
    // await ctx.render('index',{
    //     title: title
    // });
    // ctx.response.body = '<h2>Hello World</h2>';
    // let params = ctx.params;
    //
    // // 从上下文中直接获取
    // let ctx_query = ctx.query;
    //
    ctx.body = '<h2>hello world!</h2>' ;
});
router.post('/users', (ctx, next) => {
    // ...
    ctx.body = {a:"a"};
});
router.put('/users/:id', (ctx, next) => {
    let id = ctx.params.id;
    // ...
    ctx.body = 'post users ' + id;
});
router.del('/users/:id', (ctx, next) => {
    // ...
});
router.all('/users/:id', (ctx, next) => {
    // ...
    ctx.response.redirect('/');
    ctx.response.body = '<a href="/">Index Page</a>';
});



module.exports = router;

