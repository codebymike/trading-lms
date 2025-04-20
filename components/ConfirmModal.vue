<template>
    <div>
        <UModal :open="isOpen" prevent-close>
            <UCard :ui="{ root: 'h-full flex flex-col' }">
                
                <div class="space-y-3">
                    <h3 class="text-base font-semibold leading-6 text-gray-900">Are you sure?</h3>
                    <p>This action cannot be undone.</p>
                </div>

                <template #footer>
                    <div class="flex w-full justify-end gap-x-2 items-center">
                        <UButton color="info" variant="ghost" @click="toggleConfirmModal(false)" label="Cancel" />
                        <UButton color="primary" variant="soft" @click="emit('onConfirm')" label="Continue" />
                    </div>
                </template>
            </UCard>
        </UModal>
    </div>
</template>

<script setup lang="ts">
import { emit } from 'process'

const { isConfirmModalVisible, toggleConfirmModal } = useStore()

const isOpen = computed({
    get() {
        return isConfirmModalVisible.value
    },
    set() {
        toggleConfirmModal(false)
    }
})

const emit = defineEmits('onConfirm')

</script>