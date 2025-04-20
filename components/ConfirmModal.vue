<template>
    <div>
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
const { isConfirmModalVisible, toggleConfirmModal } = useStore()

const isOpen = computed({
    get() {
        return isConfirmModalVisible.value
    },
    set() {
        toggleConfirmModal(false)
    }
})
</script>