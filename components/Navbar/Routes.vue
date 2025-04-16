<template>
    <div>

    </div>
</template>

<script setup lang="ts">
const route = useRoute()

const isTeacherPage = computed(() => {
    return route.path.startsWith('/teacher')
})
const isCoursePage = computed(() => {
    return route.path.startsWith('/courses')
})
const isSearchPage = computed(() => {
    return route.path.startsWith('/search')
})

</script>