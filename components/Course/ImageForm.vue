<template>
    <div class="mt-6 border bg-slate-100 dark:bg-slate-800 rounded p-4">
        <div class="font-medium flex items-center justify-between">
            
            Course Image

            <UButton variant="ghost" v-if="isEditing" @click="isEditing = !isEditing">Cancel</UButton>
            <UButton icon="lucide:pencil" variant="ghost" v-else-if="!isEditing && courseForm.imageUrl" @click="isEditing = !isEditing">Edit</UButton>
            <UButton icon="lucide:pencil" variant="ghost" v-else @click="isEditing = !isEditing">Add</UButton>

        </div>

        <UForm v-if="isEditing" :schema="courseSchema" :state="courseForm" @submit="onSubmit">
            <!-- <div class="space-y-4 mt-8">
                <UFormField label="Course title" name="title" help="What will you teach in this course?">
                    <UInput v-model="courseForm.title" placeholder="Vue.js Development" class="w-full" :disabled="isLoading"/>
                </UFormField>
                <div class="flex items-center gap-x-2">
                    <UButton type="submit" :disabled="isLoading">Save</UButton>
                </div>
            </div> -->
            <template v-if="!isEditing">
                <div class="mt-8">
                    <div v-if="!courseForm.imageUrl" class="flex flex-col items-center justify-center h-60 bg-neutral-50 rounded-md mt-2">
                        <Icon icon="lucide:image" class="h-10 w-10 text-slate-500" />
                        <div class="text-xs text-muted-foreground mt-4 text-center">
                            No Image Found
                        </div>
                    </div>
                    <div v-else class="relative aspect-video mt-2">
                        <img :src="courseForm.imageUrl" alt="Course Image" class="object-cover rounded-md max-h-[200px] w-full" />
                </div>
            </template>
            <div v-else>
                <div class="space-y-4 mt-8">
                    <!-- Upload Button -->
                     Upload Button
                </div>
            </div>
        </UForm>
    </div>
</template>

<script setup lang="ts">
import type { Course } from '@prisma/client'
import type { FormSubmitEvent } from '@nuxt/ui';

interface ImageFormProps {
    initialData: {
        image: string;
    }
}

const { params } = useRoute()
const { isLoading, toggleLoading, showMessage, showError } = useStore()
const isEditing = ref(false);

const props = defineProps<ImageFormProps>()
const courseForm = ref<Partial<Course>>(props.initialData)

watch(() => props.initialData.image, (title : string) => {
    courseForm.value.image = image
})


const onSubmit = async ( event : FormSubmitEvent<CourseSchema> ) => {
    try {
        toggleLoading(true)
        await $fetch(`/api/teacher/courses/${params.courseId}`, {
            method: 'PATCH',
            body: event.data,
        });

        refreshNuxtData(`Teacher-Course-${params.courseId}`)

        showMessage({
            title: 'Course updated',
            description: 'Your course has been updated successfully.',
        })
        isEditing.value = false

    } catch (error) {
        const err = handleError(error)
        showError(err)
    } finally {
        toggleLoading(false)
        isEditing.value = false
    }
}

</script>