import { defineStore } from 'pinia'
import { DIALOG_TYPE } from '@/constants'

export const useDialogStore = defineStore('dialog', {
  state: () => ({
    isShow: false,
    type: DIALOG_TYPE.ALERT,
    title: '',
    message: '',
    resolve: null,
    reject: null
  }),
  actions: {
    alert(message, title) {
      return new Promise((resolve, reject) => {
        this.isShow = true
        this.type = DIALOG_TYPE.ALERT
        this.title = title || '안내'
        this.message = message
        this.resolve = resolve
        this.reject = reject
      })
    },
    confirm(message, title) {
      return new Promise((resolve, reject) => {
        this.isShow = true
        this.type = DIALOG_TYPE.CONFIRM
        this.title = title || '안내'
        this.message = message
        this.resolve = resolve
        this.reject = reject
      })
    },
    close() {
      this.isShow = false
      this.resolve = null
      this.reject = null
    }
  }
})
