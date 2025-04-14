<template>
    <div>
        <pre>
            {{ user }}
        </pre>
        <UButton @click=logout>Logout</UButton>
    </div>
</template>
<script setup lang="ts">
const {user, clear} = useUserSession()

const logout = async () => {
    await clear()
    navigateTo('/auth')
}

</script>