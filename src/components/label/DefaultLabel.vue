<script setup>
defineProps({
  forId: String
})
</script>

<template>
  <label :for="forId" class="block text-sm font-medium leading-6 text-gray-900">
    <slot></slot>
  </label>
</template>
