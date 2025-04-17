<template>
    <div class="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
        <div>
            <h1 class="text-2xl">Name your course</h1>
            <p class="text-sm text-slate-600">What would you like to name your course, don't worry you can change this later</p>
            <UForm :schema="courseSchema" :state="courseForm" @submit="onSubmit">
                <div class="space-y-8 mt-8">
                    <UFormField label="Course title" name="title" help="What will you teach in this course?">
                        <UInput v-model="courseForm.title" placeholder="Vue.js Development" class="w-full"/>
                    </UFormField>
                    <div class="flex items-center gap-x-2">
                        <UButton to="/" variant="soft">Cancel</UButton>
                        <UButton type="submit" :disabled="isLoading">Continue</UButton>
                    </div>
                </div>
            </UForm>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui';

definePageMeta({
    layout: 'teacher',
    middleware: 'protected',
})

const { isLoading } = useStore();
const courseForm = ref<CourseSchema>({
    title: '',
})

const onSubmit = async ( event : FormSubmitEvent<CourseSchema> ) => {
}

</script>