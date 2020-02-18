const Router = require("koa-router")
const service = require("../lib/mysql")
const controller = require("../controller/userController")
const router = new Router()
router.post("login", "/login", controller.login)
router.post("login", "/register", controller.register)

module.exports = router