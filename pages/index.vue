<template>
    <div>
        <pre>
            {{ user }}
        </pre>
    </div>
</template>
<script setup lang="ts">
const {user, clear} = useUserSession()

const logout = async () => {
    await clear()
}

</script>