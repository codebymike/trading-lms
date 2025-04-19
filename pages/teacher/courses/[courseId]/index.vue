<template>
    <UAlert 
        v-if="status !== 'pending' && course && !course.isPublished" 
        icon="i-lucide-alert-triangle" 
        title="This course is unpublished. It will not be visible to students." 
        color="warning" 
        variant="soft">
    </UAlert>

    <div class="p-6">
        <div class="flex items-center justify-between">
            
        </div>
    </div>

</template>

<script setup lang="ts">

definePageMeta({
    layout: 'teacher',
    middleware: 'protected',
})

const { params } = useRoute()

const { data : course, status } = await useFetch(`/api/teacher/courses/${params.courseId}`, {
    key: `Teacher-Course-${params.courseId}`,
})

</script>