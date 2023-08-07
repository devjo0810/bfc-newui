import http from './http'

export const loginAPI = async ({ email, password }) => {
  try {
    return await http.post('/auth/login', { email, password })
  } catch (e) {
    return e.response
  }
}

export const meAPI = async () => {
  try {
    return await http.get('/auth/me')
  } catch (e) {
    return e.response
  }
}

export const joinAPI = async ({ name, email, password }) => {
  try {
    return await http.post('/auth/join', { name, email, password })
  } catch (e) {
    return e.response
  }
}
