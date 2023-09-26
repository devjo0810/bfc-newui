import http from './http'

export const getChecklistAPI = async () => {
  try {
    return await http.get('/api/checklist')
  } catch (e) {
    return e.response
  }
}

export const setChecklistAPI = async ({ title }) => {
  try {
    return await http.post('/api/checklist', { title })
  } catch (e) {
    return e.response
  }
}

//삭제 API
export const deleteChecklistAPI = async () => {
  try {
    return await http.delete('/api/checklist/{checklist_id}')
  } catch (e) {
    return e.response
  }
}

export const updateChecklistAPI = async () => {
  try {
    return await http.put('/api/checklist/{checklist_id}')
  } catch (e) {
    return e.response
  }
}