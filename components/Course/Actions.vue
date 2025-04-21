<template>
    <div class="flex items-center gap-x-2">
        <UButtom color="gray" :label="course.isPublished ? 'Unpublish' : 'Publish'" @click="toggleCourse" :disabled="isLoading"></UButtom>
        <UButton icon="lucide:trash-2" size="sm" color="error" variant="soft" square @click="toggleConfirmModal(true)" :disabled="isLoading"></UButton>
    </div>
    <ConfirmModal v-if="isConfirmModalVisible" @on-confirm="deleteCourse"></ConfirmModal>
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

const deleteCourse = async () => {
    console.log(`Deleting course... ${props.course.id}`)
    toggleConfirmModal(false)
}

</script>