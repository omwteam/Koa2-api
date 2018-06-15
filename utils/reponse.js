
// 设置响应code
// code、data、msg

/**
 * 返回码说明
 * 0001 : 请求成功
 * 0002 ：参数不存在
 * 0004 : 参数错误
 * 0005 ： 用户已存在
 * @param msg
 * @param data
 * @param code
 * @returns {Response}
 * @constructor
 */

function Response(msg,data,code) {

    this.container = {
        code: code || '0001',
        msg: msg || '请求成功',
        data: data || []
    };

    this.setCode = function (code) {
        this.container.code = code;
        return this;
    };

    this.setMsg = function (msg) {
        this.container.msg = msg;
        return this;
    };

    this.setData = function (data) {
        this.container.data = data;
        return this;
    };

    this.resJson = function (msg,code,data) {
        this.container.msg = msg || '请求成功';
        this.container.code = code;
        this.container.data = data;
        return this.container;
    };

    this.resError = function (msg,code) {
        this.container.msg = msg || '请求异常';
        this.container.code = code;
        return this.container;
    };
    return this;

}

module.exports = Response;
