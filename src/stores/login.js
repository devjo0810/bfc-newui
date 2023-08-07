import { defineStore } from 'pinia'
import { setHttpAuthKey } from '@/apis/http'
import { meAPI } from '@/apis/auth'
import { HTTP_TYPE } from '@/constants'

export const useLoginStore = defineStore('login', {
  state: () => ({
    memberId: null,
    name: '',
    email: '',
    authKey: '',
    isLogin: false
  }),
  actions: {
    setAuthKey(authKey) {
      this.authKey = authKey
      localStorage.setItem('authKey', authKey)
      setHttpAuthKey(authKey)
    },
    loadAuthKey() {
      const authKey = localStorage.getItem('authKey')
      if (!authKey) return

      this.authKey = authKey
      setHttpAuthKey(authKey)
    },
    async isLoginCheck() {
      if (this.isLogin) {
        return true
      }

      this.loadAuthKey()
      if (!this.authKey) {
        return false
      }
      await this.getMe()
      return this.isLogin
    },
    async getMe() {
      const res = await meAPI()
      if (res.status !== HTTP_TYPE.SUCCESS) {
        return
      }
      const { memberId, name, email } = res.data.contents
      this.memberId = memberId
      this.name = name
      this.email = email
      this.isLogin = true
    }
  }
})
