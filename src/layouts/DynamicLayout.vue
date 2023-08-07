<script>
import DefaultLayout from './Default.vue'
import ChecklistLayout from './checklist/index.vue'

export default {
  components: {
    DefaultLayout,
    ChecklistLayout
  },
  computed: {
    layoutName() {
      return (this.$route.meta.layout || 'Default') + 'Layout'
    }
  }
}
</script>

<template>
  <component :is="layoutName" />
</template>
