/**
 * 后台接口子路由
 */

const Router = require('koa-router');
const router = new Router();
const PostController = require('./../app/Controller/PostController');

/**
 * ======================
 *  posts表相关操作路由
 * ======================
 */
// 获取列表
router.get('/post/getList', PostController.getList);
// 增加
router.post('/post/create', PostController.create);
// 删除
router.delete('/post/{id}', PostController.del);
// 更新
router.put('/post/update', PostController.update);
// 通过ID获取详情
router.get('/post/{id}', PostController.find);



module.exports = router;