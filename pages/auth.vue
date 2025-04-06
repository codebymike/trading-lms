<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import { reactive } from 'vue'
const layout = 'auth'

const items = [
  {
    label: 'Account',
    icon: 'i-lucide-user',
    slot: 'account' as const,
    description: 'Enter your account details'
  },
  {
    label: 'Register',
    icon: 'i-lucide-lock',
    slot: 'password' as const,
    description: 'Create an account'
  }
] satisfies TabsItem[]

const loginForm = reactive({
  email: '',
  password: ''
})

const registerForm = reactive({
  name: '',
  email: '',
  password: ''
})

</script>

<template>
    <NuxtLayout :name="layout">
        <UTabs :items="items" variant="link" class="gap-4 w-full max-w-md" :ui="{ trigger: 'flex-1' }">
        <template #account="{ item }">
        <p class="text-(--ui-text-muted) mb-4">
            {{ item.description }}
        </p>

        <UForm :state="loginForm" class="flex flex-col gap-4">
            <UFormField label="Name" name="name">
            <UInput v-model="loginForm.name" class="w-full" />
            </UFormField>
            <UFormField label="Username" name="username">
            <UInput v-model="loginForm.username" class="w-full" />
            </UFormField>

            <UButton label="Save changes" type="submit" variant="soft" class="self-end" />
        </UForm>
        </template>

        <template #password="{ item }">
        <p class="text-(--ui-text-muted) mb-4">
            {{ item.description }}
        </p>

        <UForm :state="registerForm" class="flex flex-col gap-4">
            <UFormField label="Current Password" name="current" required>
            <UInput v-model="registerForm.currentPassword" type="password" required class="w-full" />
            </UFormField>
            <UFormField label="New Password" name="new" required>
            <UInput v-model="registerForm.newPassword" type="password" required class="w-full" />
            </UFormField>
            <UFormField label="Confirm Password" name="confirm" required>
            <UInput v-model="registerForm.confirmPassword" type="password" required class="w-full" />
            </UFormField>

            <UButton label="Change password" type="submit" variant="soft" class="self-end" />
        </UForm>
        </template>
    </UTabs>
    </NuxtLayout>
</template>