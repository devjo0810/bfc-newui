<script setup>
import DefaultInputBox from '@/components/input/DefaultInputBox.vue'
import DefaultLabel from '@/components/label/DefaultLabel.vue'
import DefaultButton from '@/components/button/DefaultButton.vue'
import MainImage from '@/components/image/MainImage.vue'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { loginAPI } from '@/apis/auth'
import { useDialogStore } from '@/stores/dialog'
import { useLoginStore } from '@/stores/login'
import { HTTP_TYPE } from '@/constants'

const router = useRouter()
const dialog = useDialogStore()
const loginStore = useLoginStore()

const state = reactive({
  email: 'test1@test.com',
  password: ''
})

const loginClickHandler = async () => {
  const { email, password } = state
  if (!email) {
    await dialog.alert('이메일을 입력해주세요.')
    return
  }

  if (!password) {
    await dialog.alert('비밀번호를 입력해주세요.')
    return
  }

  const res = await loginAPI({ email, password })
  if (res.status !== HTTP_TYPE.SUCCESS) {
    await dialog.alert(res.data.message)
    return
  }

  loginStore.setAuthKey(res.data.contents.authKey)
  router.push('/checklist')
}
</script>

<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <MainImage />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent>
        <div>
          <DefaultLabel forId="email">Email address</DefaultLabel>
          <div class="mt-2">
            <DefaultInputBox
              id="email"
              type="email"
              autocomplete="email"
              required
              block
              v-model="state.email"
              @keydown.enter="loginClickHandler"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <DefaultLabel forId="password">Password</DefaultLabel>
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500"
                >Forgot password?</a
              >
            </div>
          </div>
          <div class="mt-2">
            <DefaultInputBox
              id="password"
              type="password"
              autocomplete="current-password"
              required
              block
              v-model="state.password"
              @keydown.enter="loginClickHandler"
            />
          </div>
        </div>

        <div>
          <DefaultButton @click="loginClickHandler" block>Sign in</DefaultButton>
          <DefaultButton className="mt-2" @click="router.push('/join')" block>Join</DefaultButton>
        </div>
      </form>
    </div>
  </div>
</template>
