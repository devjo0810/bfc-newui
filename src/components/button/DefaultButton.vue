<script setup>
import colorConfig from '@/config/tailwind-color'

const props = defineProps({
  color: {
    type: String,
    default: 'indigo'
  },
  type: {
    type: String,
    default: 'button'
  },
  className: String,
  block: Boolean
})
</script>

<template>
  <button
    :type="type"
    :class="[
      { block: block },
      { 'w-full': block },
      colorConfig[color].bg,
      colorConfig[color].hoverBg,
      className
    ]"
    class="flex justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
  >
    <slot></slot>
  </button>
</template>
