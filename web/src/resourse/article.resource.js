import http from '../util/http'

const BASE_URL = 'http://localhost:3000/'

export default {
  getArticles: (pageNo, pageSize, keyWord) => {
    console.log(http.GET)
    return http.GET(BASE_URL + 'getArticles', {
      keyWord: keyWord,
      pageNo: pageNo,
      pageSize: pageSize
    })
  },
  getArticleById: (articleId) => {
    return http.GET(BASE_URL + 'getArticleById', {
      articleId: articleId
    })
  },
  getArchive: () => {
    return http.GET(BASE_URL + 'getArchive')
  },
  getTags: () => {
    return http.GET(BASE_URL + 'getTags')
  },
  getArticleByTag: (tag) => {
    return http.GET(BASE_URL + 'getArticleByTag', {
      tag: tag
    })
  },
  deleteArticle: (articleId) => {
    return http.GET(BASE_URL + 'deleteArticle', {
      articleId: articleId
    })
  }
}
