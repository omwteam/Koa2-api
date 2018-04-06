let DB = require('./../../utils/dbUtil');

const PostController = {

    async getList (ctx) {
        // let list =  DB.select('posts','*');
        // ctx.body = ;
         ctx.body = await DB.select('posts','*') ;
    },

    async create () {

    },

    async update () {

    },

    async find () {

    },

    async del () {

    },

};


module.exports = PostController;