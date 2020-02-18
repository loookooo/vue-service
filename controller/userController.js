const user = require("../service/user");
const md5 = require('js-md5');
//登录
async function login(ctx, next) {
    let { username, password } = ctx.request.body;
    password = md5(password);
    let data = await user.login(username, password);
    //返回数据加入token
    data.token = 'Token_loookooo';
    return ctx.response.body = data;
}
//注册
async function register(ctx, next) {
    let { username, password } = ctx.request.body;
    password = md5(password);
    let data = await user.findUser(username, password);
    return ctx.response.body = data;
}
module.exports = {
    login,
    register
}