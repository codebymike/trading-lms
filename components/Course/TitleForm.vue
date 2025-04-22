<template>
    <div class="mt-6 border bg-slate-100 rounded p-4">
        <div class="font-medium flex items-center justify-between">
            
            Course Title

            <UButton variant="ghost" v-if="isEditing" @click="isEditing = !isEditing">Cancel</UButton>
            <UButton icon="lucide:pencil" variant="ghost" v-else @click="isEditing = !isEditing">Edit Title</UButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Course } from '@prisma/client'

interface TitleFormProps {
    initialData: {
        title: string;
    }
}

const props = defineProps<TitleFormProps>()

const courseForm = ref<Partial<Course>>(props.initialData)

watch(() => props.initialData.title, (title) => {
    courseForm.value.title = title
})

const isEditing = ref(false);

</script>