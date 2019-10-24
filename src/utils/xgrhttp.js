import axios from 'axios'

export default {
  get(options) {
    return axios(options)
      .then(result => {
        return result.data
      })
  },
  post1({ url, data }) {
    return axios({
      url,
      method: 'POST',
      params: data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(result => result)
  },
  post2({ url, data }) {
    return axios({
      url,
      method: 'POST',
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(result => result)
  }
}
