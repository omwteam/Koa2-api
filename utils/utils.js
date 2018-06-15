
/**
 * 检测数据类型
 * @param obj
 * @returns {string}
 */
let type = function (obj) {
    return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
};

/**
 * 判断是否是对象
 * @param obj
 * @returns {boolean}
 */
let isObject = function (obj) {
    return type(obj) === 'object';
};

/**
 * 是否是数组
 * @param obj
 * @returns {boolean}
 */
let isArray = function (obj) {
    return type(obj) === 'array';
};

module.exports = {

    /**
     * 是否是空对象
     * @param obj
     * @returns {*}
     */
    isEmptyObject: function (obj) {

        if (!isObject(obj)) {
            return "params is not Object!";
        }
        for (let i in obj) {
            if(obj.hasOwnProperty(i) && obj[i]) {
                return false;
            }
        }
        return true;

    }



};