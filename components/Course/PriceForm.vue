<template>
    <div class="mt-6 border bg-slate-100 dark:bg-slate-800 rounded p-4">
        <div class="font-medium flex items-center justify-between">
            
            Course Price

            <UButton variant="ghost" v-if="isEditing" @click="isEditing = !isEditing">Cancel</UButton>
            <UButton icon="lucide:pencil" variant="ghost" v-else @click="isEditing = !isEditing">Edit</UButton>
        </div>
        <p v-if="!isEditing" class="text-sm mt-2">
            {{ courseForm.price ? formatPrice(courseForm.price) : 'Free' }}
        </p>
        <UForm v-else :schema="courseSchema" :state="courseForm" @submit="onSubmit">
            <div class="space-y-4 mt-8">
                <UFormField label="Course Price" name="price" help="What will you charge for this course?">
                    <UInput v-model="courseForm.price" placeholder="£99.99" class="w-full" :disabled="isLoading" type="number"/>
                </UFormField>
                <div class="flex items-center gap-x-2">
                    <UButton type="submit" :disabled="isLoading">Save</UButton>
                </div>
            </div>
        </UForm>
    </div>
</template>

<script setup lang="ts">
import type { Course } from '@prisma/client'
import type { FormSubmitEvent } from '@nuxt/ui';

interface PriceFormProps {
    initialData: {
        price: number | null;
    }
}

const { params } = useRoute()
const { isLoading, toggleLoading, showMessage, showError } = useStore()
const isEditing = ref(false);

const props = defineProps<PriceFormProps>()
const courseForm = ref<Partial<Course>>(props.initialData)

watch(() => props.initialData.price, (price : number | null) => {
    courseForm.value.price = price
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