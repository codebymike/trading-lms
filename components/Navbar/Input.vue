<template>
    <UInput icon="lucide:search" size="md" :trailing="false" color="gray" variant="outline" placeholder="Search..." :ui="{ rounded: 'rounded-full' }" v-model="q"/>
</template>

<script lang="ts">
const q = ref('')
</script>