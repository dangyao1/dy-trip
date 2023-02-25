import axios from "axios"
import { BASE_URL, TIMEOUT } from './config'

class DyRequest {
  constructor(BASE_URL, TIMEOUT = 10000) {
    this.instance = axios.create({ baseURL: BASE_URL, timeout: TIMEOUT })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then((res) => {
        resolve(res.data)
      }).catch((error) => {
        reject(error)
      })
    })
  }

  get(config) {
    return this.request({
      ...config,
      method: 'get'
    })
  }

  post(config) {
    return this.request({
      ...config,
      method: 'post'
    })
  }
}


export default new DyRequest(BASE_URL, TIMEOUT)