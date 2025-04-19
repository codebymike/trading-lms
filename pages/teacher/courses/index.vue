<template>
    <div>
        Teacher Courses
    </div>
    <div v-if="status !== 'pending' && courses">
        <NuxtLink class="mb-1 text-primary-50 block" v-for="course in courses" :key="course.id" :to="`/teacher/courses/${course.id}`">{{ course.title }}</NuxtLink>
    </div>
</template>

<script setup lang="ts">

definePageMeta({
    layout: 'teacher',
    middleware: 'protected',
})

const { data : courses, status } = await useFetch('/api/teacher/courses', {
    method: 'GET',
})
</script>