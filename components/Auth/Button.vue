<template>
    <div class="">
        <div class="flex items-center align-center text-center w-full flex-row">
            <div class="flex border-gray-200 dark:border-gray-800 w-full border-t border-solid"></div>
            <div class="font-medium text-gray-700 dark:text-gray-200 flex my-3 whitespace-nowrap">
                <span class="text-sm">or</span>
            </div>
            <div class="flex border-gray-200 dark:border-gray-800 w-full border-t border-solid"></div>
        </div>
        <a href="/api/auth/github" class="block">
            <UButton icon="i-lucide-github" square block color="primary">Continue with GitHub</UButton>
        </a>
    </div>
</template>
<script setup lang="ts">
</script>