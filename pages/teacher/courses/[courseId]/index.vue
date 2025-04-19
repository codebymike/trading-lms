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

const requiredFields = computed( () => {
    return [
        course.value?.title,
        course.value?.description,
        course.value?.imageUrl,
        course.value?.price,
        course.value?.categoryId,
        course.value?.chapters.some( chapter => chapter.isPublished )
    ]
})

const totalFields = computed( () => requiredFields.value.length )
const completedFields = computed( () => requiredFields.value.filter(Boolean).length )

</script>