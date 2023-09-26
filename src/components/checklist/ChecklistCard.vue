<script setup>
import TrashIcon from '@/components/icon/TrashIcon.vue'
import ChecklistLabel from '@/components/label/ChecklistLabel.vue'

defineProps({
    data: {
        type: Object,
        required: true,
    }
})

//삭제
const deleteItem = async () => {
}
</script>



<template>
    <div class="group relative">
        <div class="mt-2 flex justify-between border border-gray-300 rounded-md p-3 hover:cursor-pointer">
            <div v-if="data">
                <h3 class="text-lg text-gray-700">{{ data.title }}</h3>
                <ChecklistLabel>checklist item count : {{ data.itemsCount }}</ChecklistLabel>
                <ChecklistLabel>created at : {{ data.createdAt }}</ChecklistLabel>
                <ChecklistLabel>modified at : {{ data.updatedAt }} </ChecklistLabel>
            </div>
            <button class="text-sm font-medium text-red-500" @click="deleteItem">
                <TrashIcon />
            </button>
        </div>
    </div>
</template>