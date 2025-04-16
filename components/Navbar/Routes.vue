<template>
    <div>
        <div class="hidden md:block" v-if="isSearchPage">
            <NavbarInput></NavbarInput>
        </div>
        <div class="flex gap-x-2 ml-auto">
            <UButton v-if="isTeacherPage || isCoursePage" to="/" label="Exit" icon="lucide:log-out" size="sm" variant="ghost"></UButton>
            <UButton v-else to="/teacher" label="Teacher Mode" size="sm" variant="ghost"></UButton>
        </div>
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