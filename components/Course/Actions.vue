<template>
    <div class="flex items-center gap-x-2">
        <UButtom color="gray" :label="courseSchema.isPublished ? 'Unpublish' : 'Publish'" @click="toggleCourse" :disabled="isLoading"></UButtom>
        <UButton icon="iconify:trash" size="sm" color="warning" variant="soft" square @click="toggleConfirmModal" :disabled="isLoading"></UButton>
    </div>
</template>

<script setup lang="ts">
import type { Course } from '@prisma/client'

const props = defineProps<{
    course: Course
}>()

const { isLoading, toggleConfirmModal } = useStore()

const toggleCourse = () => {
    props.course.isPublished = !props.course.isPublished
}

</script>