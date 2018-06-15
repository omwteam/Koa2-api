/**
 * 整合所有子路由
 */

const router = require('koa-router')();

// const home = require('./home');
const api = require('./api');
const admin = require('./admin');
// const work = require('./work');
// const error = require('./error');

router.get('/', function () {

    // ctx.response.body = '<h1>Index</h1>';
    // let title = 'hello koa2'
    // await ctx.render('./test', {
    //     title,
    // })
});
// router.get('/', async (ctx, next) => {
//     ctx.response.body = '<h1>Index</h1>';
// });
router.use('/api', api.routes(), api.allowedMethods());
router.use('/admin', admin.routes(), admin.allowedMethods());
// router.use('/work', work.routes(), work.allowedMethods());
// router.use('/error', error.routes(), error.allowedMethods());
module.exports = router;