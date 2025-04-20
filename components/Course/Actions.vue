<template>
    <div class="flex items-center gap-x-2">
        <UButtom color="gray" :label="courseSchema.isPublished ? 'Unpublish' : 'Publish'" @click="toggleCourse" :disabled="isLoading"></UButtom>
        <UButton icon="iconify:trash-2" size="sm" color="warning" variant="soft" square @click="toggleConfirmModal(true)" :disabled="isLoading"></UButton>
    </div>
    <ConfirmModal v-if="isConfirmModalVisible"></ConfirmModal>
</template>

<script setup lang="ts">
import type { Course } from '@prisma/client'

const props = defineProps<{
    course: Course
}>()

const { isLoading, toggleConfirmModal, isConfirmModalVisible } = useStore()

const toggleCourse = () => {
    props.course.isPublished = !props.course.isPublished
}

</script>