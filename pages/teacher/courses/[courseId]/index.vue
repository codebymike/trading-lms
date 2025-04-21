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

            <div class="flex flex-col gap-y-2">
                <h1 class="text-2xl font-medium">Course Setup</h1>
                <span class="text-sm text-slate-700">
                    Complete all fields {{ completionText }}.
                </span>
            </div>
            <CourseActions :course="course" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            <div class="flex items-center gap-x-2">
                <UButton icon="lucide:blocks" size="lg" variant="soft" />
                <h2 class="text-xl">Customise your course</h2>
            </div>
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
        course.value?.chapters.some( (chapter) => chapter.isPublished )
    ]
})

const totalFields = computed( () => requiredFields.value.length )
const completedFields = computed( () => requiredFields.value.filter(Boolean).length )
const completionText = computed( () => `${completedFields.value}/${totalFields.value}` )
const isComplete = computed( () => requiredFields.value.every( Boolean ) )

</script>