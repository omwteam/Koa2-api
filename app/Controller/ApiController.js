let Post = require('./../Models/User');
const commonJs = require('../../utils/utils');
const response = require('../../utils/reponse');
const PostController = {

    async index (ctx) {
        ctx.body = '<h2>api!</h2>';
        // await ctx.render('index',{
        //     title: 'Hello Koa2 !'
        // });
    },

    async getList (ctx) {
        ctx.body = await Post.getList();
    },

    async create (ctx) {

        let params = ctx.request.body;
        ctx.body = response.setData(ctx.request.body).container;
        // 参数验证
        if (commonJs.isEmptyObject(params)) {
            ctx.body = response.setMsg('params is invalid!').setCode('0004').container;
        }

        // 保存

       /* const post = new Post({
            "title": "标题",
            "content": "内容详情",
            "desc": "描述",
            "u_id": 1,
            "category_id": 1,
            "tags": [],
            "type": 0,
            "published_at": new Date(),
            "created_at": new Date(),
        });
        // ctx.body =  post;

        const res = await post.save();
        if (res){
            ctx.body =  res;
        } else {
            ctx.body =  "xxx";
        }*/



        // console.log(params);
        // ctx.response.header = "application/json";
        // ctx.response.body = params;
        // ctx.body = await Post.create(JSON.stringify(params));
    },

    async update () {

    },

    async find () {

    },

    async del () {

    },

};


module.exports = PostController;