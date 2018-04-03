const crypto = require('crypto')
const mongoose = require('mongoose')
const User = mongoose.model('users')
const Result = require('../models/result.js')


userLogin = async (ctx, next) => {
    let md5 = crypto.createHash('md5'),
        password = md5.update(ctx.request.body.password).digest('hex')
    let result = new Result({code:0, message: '', content: ''})
    try {
        const user =  await User.findOne({'name': ctx.request.body.name})
        if (!user) {
            result.code = 0
            result.message = "找不到用户"
            ctx.body = result
        } else if (user.password !== password) {
            result.code = 0
            result.message = "密码不正确"
        } else {
            result.code = 1
            result.message = "登录成功"
            result.content = user
        }
        ctx.body = result
    } catch (err) {
        result.code = 0
        result.message = "数据库出错"
        ctx.body = result
    }
}

module.exports = {userLogin}