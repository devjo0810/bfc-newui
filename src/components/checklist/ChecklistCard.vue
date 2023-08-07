<script setup>
import TrashIcon from '@/components/icon/TrashIcon.vue'
import ChecklistLabel from '@/components/label/ChecklistLabel.vue'
</script>

<template>
    <div class="group relative">
        <div
            class="mt-2 flex justify-between border border-gray-300 rounded-md p-3 hover:cursor-pointer"
        >
            <div>
                <h3 class="text-lg text-gray-700">Checklist name</h3>
                <ChecklistLabel>checklist item count : 26</ChecklistLabel>
                <ChecklistLabel>created at : 2023.07.01</ChecklistLabel>
                <ChecklistLabel>modified at : 2023.07.02</ChecklistLabel>
            </div>
            <button class="text-sm font-medium text-red-500">
                <TrashIcon />
            </button>
        </div>
    </div>
</template>