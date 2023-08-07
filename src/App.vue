<script setup>
import DynamicLayout from '@/layouts/DynamicLayout.vue'
import GlobalDialog from '@/components/global/Dialog.vue'
import { useDialogStore } from '@/stores/dialog'
import { computed } from 'vue'

const dialogStore = useDialogStore()
const isDialogShow = computed(() => dialogStore.isShow)
</script>

<template>
  <DynamicLayout />
  <GlobalDialog v-if="isDialogShow" />
</template>
