const router = require('koa-router')()
const userController = require('../controllers/userController')
const articleController = require('../controllers/articleController')


router.post('/login', userController.userLogin)
    .post('/saveArticle', articleController.saveArticle)
    .get('/getArticles', articleController.getArticleByPage)
    .get('/getArticleById', articleController.getArticleById)
    .get('/getArchive', articleController.getArchive)
    .get('/getTags', articleController.getTags)
    .get('/getArticleByTag', articleController.getArticleByTag)
    .get('/deleteArticle', articleController.deleteArticle)

module.exports = router
