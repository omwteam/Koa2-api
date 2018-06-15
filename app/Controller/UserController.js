const UserModel = require('./../Models/User');
const commonJs = require('../../utils/utils');
const Response = require('../../utils/reponse');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const secret = 'albeanfengFFFFFDDDDDBBBBB';
let UserController = {

    async index (ctx) {
        let title = 'Koa2 render Index'
        await ctx.render('public/register', {
            title,
        })
        // ctx.body = 'xxxxx';
    },
    async login (ctx) {
        let title = 'Koa2 render Index'
        await ctx.render('public/login', {
            title,
        })
        // ctx.body = 'xxxxx';
    },
    async doLogin (ctx) {

        let params = ctx.request.body;

        let response = new Response();

        // 参数验证
        if (commonJs.isEmptyObject(params)) {
            return ctx.body = response.resError('params is invalid!','0004');
        }

        if (!params.email || !params.password) {
            return ctx.body = response.resError('email or password is not exist!','0002');
        }

        //随机生成salt
        const salt = bcrypt.genSaltSync(10);
        //获取hash值
        //把hash值赋值给password变量
        params.password = await bcrypt.hashSync(params.password, salt);

        // 检查用户和密码是否存在

        let user = await UserModel.find({ email: params.email });
        return ctx.body = response.resJson('用户名不xxxxxx存在！','0002',user)
        if (!user.length) {
            return ctx.body = response.resError('用户名不存在！','0002')
        }

        if( !(await bcrypt.compare(params.password, user.password))) {

        }

        return ctx.body = {
            message: '登录成功',
            user: user,
            // 生成 token 返回给客户端
            token: jsonwebtoken.sign({
                data: user,
                // 设置 token 过期时间
                exp: Math.floor(Date.now() / 1000) + (2*60 * 60), // 60 seconds * 60 minutes = 1 hour
            }, secret),
        };

        // let res = await UserModel.find(params);
        //
        // if (!res) {
        //     return ctx.body = response.resError('用户名/密码不正确！','0002')
        // }





    },

    async create (ctx) {

        let params = ctx.request.body;

        let response = new Response();

        // 参数验证
        if (commonJs.isEmptyObject(params)) {
            return ctx.body = response.resError('params is invalid!','0004');
        }

        if (!params.email || !params.password) {
            return ctx.body = response.resError('email or password is not exist!','0002');
        }
        // 检查用户命名是否存在
        let list = await UserModel.find({email:params.email});

        if ( list.length > 0 ) {
            return ctx.body = response.resError('用户名已存在','0002');
        }
        //随机生成salt
        const salt = bcrypt.genSaltSync(10);
        //获取hash值
        //把hash值赋值给password变量
        params.password = bcrypt.hashSync(params.password, salt);
        // return ctx.body = response.resJson('msg','0008',params);

        let userInst = new UserModel(params);

        let res =  await userInst.save();
        if (res) {
            console.log('插入成功');
            return ctx.body = response.resJson('插入成功','0001',res);
        } else {
            console.log('插入失败')
            return ctx.body = response.resError('插入失败','0004',res);
        }


    },

    async update () {

    },

    async find () {

    },

    async del () {

    },

};


module.exports = UserController;