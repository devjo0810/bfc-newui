<script setup>
defineProps({
  id: String,
  type: String,
  autocomplete: String,
  modelValue: String,
  placeHolder: String,
  required: Boolean,
  block: Boolean
})
defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :id="id"
    :type="type"
    :autocomplete="autocomplete"
    :placeholder="placeHolder"
    :required="required"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :class="{ block: block }"
    class="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  />
</template>
