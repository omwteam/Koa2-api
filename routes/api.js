/**
 * restful api 子路由
 */

const Router = require('koa-router');
const router = new Router();
const UserController = require('./../app/Controller/UserController');


// 获取列表
router.get('/register', UserController.index);
router.post('/doRegister', UserController.create);
router.get('/login', UserController.login);
router.post('/doLogin', UserController.doLogin);
module.exports = router;