<template>
    <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-start' }">
        <UAvatar icon="lucide:circle-user" size="sm" color="black" />
    </UDropdown>
</template>

<script setup lang="ts">
const items = [
    [{
        label:'',
        slot: 'account',
        disabled: true
    }],[{
        label: 'Settings',
        icon: 'lucide:settings',
    }]
]
</script>