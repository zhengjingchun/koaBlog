import axios from 'axios'

export default {
  POST: function (url, model) {
    return new Promise(function (resolve, reject) {
      axios({
        method: 'post',
        url: url,
        data: model
      }).then((response) => {
        resolve(response.data)
      }).catch((error) => {
        reject(error)
      })
    })
  },

  GET: function (url, params) {
    return new Promise(function (resolve, reject) {
      axios.get(url, params).then((response) => {
        resolve(response.data)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}
