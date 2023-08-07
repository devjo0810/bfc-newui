<script setup>
import DefaultLabel from '@/components/label/DefaultLabel.vue'
import DefaultInputBox from '@/components/input/DefaultInputBox.vue'
import DefaultButton from '@/components/button/DefaultButton.vue'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useDialogStore } from '@/stores/dialog'
import { joinAPI } from '@/apis/auth'
import { HTTP_TYPE } from '@/constants'

const router = useRouter()
const dialog = useDialogStore()

const state = reactive({
  email: '',
  name: '',
  password: '',
  rePassword: ''
})

const saveClickHandler = async () => {
    const { email, name, password, rePassword } = state
    if (!email) {
        await dialog.alert('이메일이 비어있습니다.')
        return
    }
    if (!name) {
        await dialog.alert('이름이 비어있습니다.')
        return
    }
    if (!password) {
        await dialog.alert('비밀번호가 비어있습니다.')
        return
    }
    if (password !== rePassword) {
        await dialog.alert('비밀번호가 정확하지 않습니다.')
        return
    }

    const res = await joinAPI({ name, email, password })
    if (res.status !== HTTP_TYPE.SUCCESS) {
        await dialog.alert(res.data.message)
        return
    }
    await dialog.alert('회원가입 되었습니다.')
    router.push('/')
}
</script>

<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent>
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>

            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-6">
                <DefaultLabel forId="email">Email address</DefaultLabel>
                <div class="mt-2 grid gap-x-6 sm:grid-cols-6">
                  <div class="sm:col-span-4">
                    <DefaultInputBox
                      id="email"
                      type="email"
                      autocomplete="email"
                      block
                      v-model="state.email"
                      @keydown.enter="saveClickHandler"
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <DefaultButton block>check</DefaultButton>
                  </div>
                </div>
              </div>

              <div class="sm:col-span-4">
                <DefaultLabel forId="username">Username</DefaultLabel>
                <div class="mt-2">
                  <DefaultInputBox id="username" type="text" block v-model="state.name" @keydown.enter="saveClickHandler" />
                </div>
              </div>

              <div class="sm:col-span-4">
                <DefaultLabel forId="password">Password</DefaultLabel>
                <div class="mt-2">
                  <DefaultInputBox
                    id="password"
                    type="password"
                    block
                    v-model="state.password"
                    @keydown.enter="saveClickHandler"
                  />
                </div>
              </div>
              <div class="sm:col-span-4">
                <DefaultLabel forId="passwordCheck">Password Check</DefaultLabel>
                <div class="mt-2">
                  <DefaultInputBox
                    id="passwordCheck"
                    type="password"
                    block
                    v-model="state.rePassword"
                    @keydown.enter="saveClickHandler"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button @click="router.push('/')" class="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <DefaultButton @click="saveClickHandler" type="submit">Save</DefaultButton>
        </div>
      </form>
    </div>
  </div>
</template>
