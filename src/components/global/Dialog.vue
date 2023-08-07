<script setup>
import CloseIcon from '@/components/icon/CloseIcon.vue'
import WarningIcon from '@/components/icon/WarningIcon.vue'
import { useDialogStore } from '@/stores/dialog'
import { computed } from 'vue'
import { DIALOG_TYPE } from '@/constants'

const dialogStore = useDialogStore()

const message = computed(() => dialogStore.message)
const type = computed(() => dialogStore.type)

const confirmHandler = () => {
  dialogStore.resolve(true)
  dialogStore.close()
}

const closeHandler = () => {
  dialogStore.resolve(false)
  dialogStore.close()
}
</script>

<template>
  <div
    class="bg-gray-900 bg-opacity-40 fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center"
  >
    <div class="relative w-full max-w-md max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          @click="closeHandler"
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <CloseIcon />
          <span class="sr-only">Close modal</span>
        </button>
        <div class="p-6 text-center">
          <WarningIcon />
          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{{ message }}</h3>
          <button
            @click="confirmHandler"
            type="button"
            :class="{ 'mr-2': type === DIALOG_TYPE.CONFIRM }"
            class="text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
          >
            확인
          </button>
          <button
            v-if="type === DIALOG_TYPE.CONFIRM"
            @click="closeHandler"
            type="button"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            취소
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
