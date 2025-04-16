<template>
    <UDropdownMenu :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-start' }">
        <UAvatar icon="lucide:circle-user" size="sm" color="black" />

        <template #account="">
            <div class="text-left">
                <p>
                    Signed in as
                </p>
                <p class="truncate font-medium text-gray-900 dark:text-white">
                    {{ user?.name }}
                </p>
            </div>
        </template>

        <template #item="{ item }">
            <div @click="logout" class="flex justify-between items-center w-full">
                <span class="truncate">{{ item.label }}</span>
                <UIcon :name="item.icon" class="flex shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
            </div>
        </template>

    </UDropdownMenu>
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
const { user, clear } = useUserSession()

const logout = async () => {
    await clear()
    await navigateTo('/auth')
}

const items = ref<DropdownMenuItem[]>([
    {
        label: '',
        icon: 'lucide:circle-user',
        slot: 'account' as const,
        disabled: true
    },{
        label: 'Settings',
        icon: 'lucide:settings',
    }
])
</script>