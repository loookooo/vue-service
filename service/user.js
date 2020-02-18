const allSqlAction = require("../lib/mysql")
    //登录
async function login(username, password) {
    let sql = `select * from users  where username = '${username}' and password='${password}'`
    return allSqlAction.allSqlAction(sql).then(res => {
        if (res.length == 1 && res[0].username === username && res[0].password === password) {
            return { data: res[0], msg: "登录成功", code: 200 }
        } else {
            return { msg: "登录失败", code: 201 }
        }
    })
}
async function findUser(username, password) {
    let sql = `select * from users  where username = '${username}'`
    return allSqlAction.allSqlAction(sql).then(res => {
        if (res.length == 0) {
            return register(username, password)
        } else {
            return { msg: "用户已存在", code: 202 }
        }
    })
}
async function register(username, password) {
    let sql = `insert into users  (username,password) values ('${username}','${password}')`
    return allSqlAction.allSqlAction(sql).then(res => {
        if (res.affectedRows == 1) {
            return { msg: "注册成功", code: 200 }
        } else {
            return { msg: "注册失败", code: 201 }
        }
    })
}
module.exports = {
    login,
    findUser,
    register
}