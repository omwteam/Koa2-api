const mongoose = require('mongoose');
const db = require("../../utils/MgDb");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
        default: 0
    },
    desc: String,
    u_id: Number,
    category_id: Number,
    tags: Array,
    type: {
        type: Number,
        default: 0
    },
    published_at: Date,
    created_at: Date,
    deleted_at: Date
});

// {
//     "id": 1,
//     "title": "标题",
//     "content": "内容详情",
//     "desc": "描述",
//     "u_id": "提交的用户",
//     "category_id": "所属目录",
//     "tags": [],
//     "type": "默认是0 只有后台可见，发布后1 删除 2",
//     "published_at": "发布时间",
//     "created_at": "创建时间",
//     "deleted_at": "删除时间"
// }

const Post = mongoose.model('Post',postSchema);
module.exports = Post;