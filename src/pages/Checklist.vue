<script setup>
import ChecklistCard from '@/components/checklist/ChecklistCard.vue'
import { getChecklistAPI, setChecklistAPI } from '@/apis/checklist'
import { onMounted, reactive } from 'vue'
import { HTTP_TYPE } from '@/constants';
import { useDialogStore } from '@/stores/dialog'

const dialog = useDialogStore

const state = reactive({
  items: []
})

onMounted(async () => {
  const res = await getChecklistAPI()

  if (res.status !== HTTP_TYPE.SUCCESS) {
    await dialog.alert(res.data.message)
  } else {
    state.items = res.data.contents
  }
  console.log(state.items)
})


//체크리스트 생성
const createChecklist = async () => {
  //popup창으로 input데이터 넘기기
  const response = await setChecklistAPI({ title: 'test' })
  if (response.status === 200) {
    console.log('SUCESS')
  } else {
    await dialog.alert(response.data.message)
  }
}

</script>

<template>
  <main class="bg-white">
    <div class="mx-auto max-w-7xl p-6 lg:px-8">
      <div class="flex justify-between">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          Checklist
        </h2>
        <button type="button"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          @click="createChecklist">
          Create
        </button>
      </div>
      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <ChecklistCard v-for="item in state.items" :key="item.checklistId" :data="item"></ChecklistCard>
      </div>
    </div>
  </main>
</template>