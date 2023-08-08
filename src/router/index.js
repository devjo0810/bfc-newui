import { createWebHistory, createRouter } from 'vue-router'
import LoginPage from '@/pages/Login.vue'
import JoinPage from '@/pages/Join.vue'
import ChecklistPage from '@/pages/Checklist.vue'
import NotFoundPage from '@/pages/NotFound.vue'
import TestPage from '@/pages/Test.vue'
import { useDialogStore } from '@/stores/dialog'
import { useLoginStore } from '@/stores/login'

const routes = [
  { path: '/', component: LoginPage },
  { path: '/join', component: JoinPage },
  { path: '/checklist', component: ChecklistPage, meta: { auth: true, layout: 'Checklist' } },
  { path: '/test', component: TestPage },
  { path: '/:pathMatch(.*)*', component: NotFoundPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.auth) {
    const loginStore = useLoginStore()
    const dialog = useDialogStore()
    const isLogin = await loginStore.isLoginCheck()
    if (!isLogin) {
      await dialog.alert('로그인 후 이용 가능합니다.')
      next('/')
    }
  }
  return next()
})

export default router
