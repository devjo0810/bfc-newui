import http from './http'

export const getChecklistAPI = async () => {
  try {
    return await http.get('/api/checklist')
  } catch (e) {
    return e.response
  }
}
