<template>
    <div>

    </div>
</template>

<script setup lang="ts">

definePageMeta({
    layout: 'teacher',
    middleware: 'protected',
})

const { data : course, status } = await useFetch('/api/teacher/courses/{}', {
    method: 'GET',
})

</script>