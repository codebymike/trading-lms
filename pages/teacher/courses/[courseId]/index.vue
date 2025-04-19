<template>
    <div>
        <pre>{{ course }}</pre>
    </div>
</template>

<script setup lang="ts">

definePageMeta({
    layout: 'teacher',
    middleware: 'protected',
})

const { params } = useRoute()

const { data : course } = await useFetch(`/api/teacher/courses/${params.courseId}`, {
    key: `Course-${params.courseId}`,
})

</script>