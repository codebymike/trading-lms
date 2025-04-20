<template>
    <div>
        <UButton label="Open" @click="isOpen = true" />
        <UModal :open="isOpen">
            <UCard>
                <template #header>
                    <Placeholder class="h-8" />
                </template>

                <Placeholder class="h-32" />

                <template #footer>
                    <Placeholder class="h-8" />
                </template>
            </UCard>
        </UModal>
    </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)
</script>