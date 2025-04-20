<template>
    <div class="flex items-center gap-x-2">
        <UButtom color="gray" :label="courseSchema.isPublished ? 'Unpublish' : 'Publish'" @click="toggleCourse" :disabled="isLoading"></UButtom>
    </div>
</template>

<script setup lang="ts">
import type { Course } from '@prisma/client'

</script>