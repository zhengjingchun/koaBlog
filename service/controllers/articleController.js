const mongoose = require('mongoose')
const Article = mongoose.model('posts')
const Result = require('../models/result.js')
const ObjectId = require('mongodb').ObjectId;

getArticleByPage = async (ctx, next) => {
    let pattern = new RegExp((ctx.request.query.keyWord || ''), "i")
    let pageNo = parseInt(ctx.request.query.pageNo || 1)
    let pageSize = parseInt(ctx.request.query.pageSize || 10)
    let result = new Result({code:0, message: '', content: ''})
    try {
        const articleList = await Article.find({
            "title": pattern
        }, {
            comments: 0
        }, {
            skip: (pageNo - 1) * pageSize,
            limit: pageSize
        })
        if (articleList) {
            result.code = 1
            result.message = "获取数据成功"
            result.content = articleList
        } else {
            result.code = 0
            result.message = "数据为空"
            result.content = []
        }

        ctx.body = result
    } catch (err) {
        result.code = 0
        result.message = "数据库出错"
        ctx.body = result
    }
}

getArticleById = async (ctx, next) => {
    let articleId = ctx.request.query.articleId
    let result = new Result({code:0, message: '数据库出错', content: ''})
    let query = {
        "_id": articleId
    }
    try {
        const article = await Article.findOne(query)
        if (article) {
            await Article.updateOne(query, {
                $inc: {"pv": 1}
            })
            result.code = 1
            result.message = "获取文章成功"
            result.content = article
        } else {
            result.code = 0
            result.message = "获取文章失败"
        }
        ctx.body = result
    } catch (err) {
        ctx.body = result
    }
}

getArchive = async (ctx, next) => {
    let result = new Result({code:0, message: '数据库出错', content: ''})
    try {
        const archiveList = await Article.find({}, {
            "name": 1,
            "time": 1,
            "title": 1,
            "pv": 1
        }).sort({
            time: -1
        })
        if (archiveList) {
            result.code = 1
            result.message = "获取成功"
            result.content = archiveList
        } else {
            result.code = 0
            result.message = "暂无文章"
        }
        ctx.body = result
    } catch (err) {
        ctx.body = result
    }
}

getTags = async (ctx, next) => {
    let result = new Result({code:0, message: '数据库出错', content: ''})
    try {
        const tagList = await Article.find().distinct('tags')
        if (tagList) {
            result.code = 1
            result.message = "获取成功"
            result.content = tagList
        } else {
            result.code = 0
            result.message = "暂无标签"
        }
        ctx.body = result
    } catch (err) {
        ctx.body = result
    }
}

getArticleByTag = async (ctx, next) => {
    let tag = ctx.request.query.tag
    let result = new Result({code:0, message: '数据库出错', content: ''})
    try {
        const articleList = await Article.find({
            "tags": tag
        }, {
            "name": 1,
            "time": 1,
            "title": 1,
            "pv": 1
        }).sort({
            "time": -1
        })
        if (articleList) {
            result.code = 1
            result.message = "获取成功"
            result.content = articleList
        } else {
            result.code = 0
            result.message = "标签下无文章"
        }
        ctx.body = result
    } catch (err) {
        ctx.body = result
    }
}

saveArticle = async (ctx, next) => {
    let article = ctx.request.body
    let result = new Result({code:0, message: '数据库出错', content: ''})
    try {
        await
        ctx.body = result
    } catch (err) {
        ctx.body = result
    }
}

deleteArticle = async (ctx, next) => {
    let articleId = ctx.request.query.articleId
    let result = new Result({code:0, message: '数据库出错', content: ''})
    let query = {
        "_id": articleId
    }
    try {
        await Article.findOneAndRemove(query)
        result.code = 1
        result.message = "获取文章成功"
        ctx.body = result
    } catch (err) {
        ctx.body = result
    }
}

module.exports = {getArticleByPage, getArticleById, getArchive, getTags, getArticleByTag, deleteArticle}