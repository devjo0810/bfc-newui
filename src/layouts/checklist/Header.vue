<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
    <header class="bg-white">
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <button @click="router.push('/checklist')" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </button>
        </div>
        <div class="flex flex-1 justify-end">
          <button
            @click="router.push('/')"
            class="text-sm font-semibold leading-6 text-gray-900"
            >Log out <span aria-hidden="true">&rarr;</span></button
          >
        </div>
      </nav>
    </header>
</template>