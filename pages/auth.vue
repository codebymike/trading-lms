<script setup lang="ts">
import type { TabsItem } from '@nuxt/#ui/tabs'
import { reactive } from 'vue'
const layout = 'auth'

const items = [
  {
    label: 'Account',
    icon: 'i-lucide-user',
    slot: 'account' as const
  },
  {
    label: 'Password',
    icon: 'i-lucide-lock',
    slot: 'password' as const
  }
] satisfies TabsItem[]

const state = reactive({
  name: '',
  username: '',
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})
</script>

<template>
    <NuxtLayout :name="layout">
        <UTabs :items="items" variant="link" class="gap-4 w-full" :ui="{ trigger: 'flex-1' }">
        <template #account="{ item }">
        <p class="text-(--ui-text-muted) mb-4">
            {{ item.description }}
        </p>

        <UForm :state="state" class="flex flex-col gap-4">
            <UFormField label="Name" name="name">
            <UInput v-model="state.name" class="w-full" />
            </UFormField>
            <UFormField label="Username" name="username">
            <UInput v-model="state.username" class="w-full" />
            </UFormField>

            <UButton label="Save changes" type="submit" variant="soft" class="self-end" />
        </UForm>
        </template>

        <template #password="{ item }">
        <p class="text-(--ui-text-muted) mb-4">
            {{ item.description }}
        </p>

        <UForm :state="state" class="flex flex-col gap-4">
            <UFormField label="Current Password" name="current" required>
            <UInput v-model="state.currentPassword" type="password" required class="w-full" />
            </UFormField>
            <UFormField label="New Password" name="new" required>
            <UInput v-model="state.newPassword" type="password" required class="w-full" />
            </UFormField>
            <UFormField label="Confirm Password" name="confirm" required>
            <UInput v-model="state.confirmPassword" type="password" required class="w-full" />
            </UFormField>

            <UButton label="Change password" type="submit" variant="soft" class="self-end" />
        </UForm>
        </template>
    </UTabs>
    </NuxtLayout>
</template>