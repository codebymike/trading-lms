<template>
    <div>
        <pre>{{ user }}</pre>
        <UButton @click=logout>Logout</UButton>

        <UButton to="/teacher">Teacher Mode</UButton>
    </div>
</template>
<script setup lang="ts">

definePageMeta({
    middleware: 'protected',
})

import { navigateTo } from 'nuxt/app'

const {user, clear} = useUserSession()

const logout = async () => {
    await clear()
    navigateTo('/auth')
}

</script>