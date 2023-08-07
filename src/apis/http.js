import axios from 'axios'

const BASE_URL = 'http://146.56.143.153:7075'
const HTTP_TIMEOUT = 60000

const http = axios.create({
  baseURL: BASE_URL,
  timeout: HTTP_TIMEOUT,
})

export const setHttpAuthKey = (authKey) => {
  http.defaults.headers.common.Authorization = authKey
}

export default http
