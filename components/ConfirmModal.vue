<template>
    <div>
        <UModal :open="isOpen" prevent-close>
            <template #content>
                <UCard>
                    <div class="space-y-3">
                        <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-gray-200">Are you sure?</h3>
                        <p>This action cannot be undone.</p>
                    </div>

                    <template #footer>
                        <div class="flex w-full justify-end gap-x-2 items-center">
                            <UButton color="info" variant="ghost" @click="toggleConfirmModal(false)" label="Cancel" />
                            <UButton color="error" variant="soft" @click="emit('onConfirm')" label="Continue" />
                        </div>
                    </template>
                </UCard>
            </template>
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

const emit = defineEmits(['onConfirm'])

</script>