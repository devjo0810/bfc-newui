<script setup>
import { exportExcel, readExcel } from '@/utils/fileUtil'
import { ref } from 'vue';

const fileRef = ref()

function exportExcelHandler() {
  exportExcel('test_excel', 'sheet1', [ '이름', '생일' ], [
            { name: '이름1', birthday: '8월 17일' },
            { name: '이름2', birthday: '8월 18일' },
            { name: '이름3', birthday: '8월 19일' },
            { name: '이름4', birthday: '8월 20일' },
            { name: '이름5', birthday: '8월 21일' }
        ])
}

async function uploadExcelHandler() {
  const uploadFile = fileRef.value.files[0]
  const excel = await readExcel(uploadFile, ['name', 'birth'])
  console.log(excel.rows)
}
</script>

<template>
  <div>
    <h1>TEST</h1>
    <button @click="exportExcelHandler">download</button>
    <input ref="fileRef" type="file" @change="uploadExcelHandler">
  </div>
</template>