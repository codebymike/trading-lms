<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import type { FormSubmitEvent } from '@nuxt/ui'
import type { LoginSchema, RegisterSchema } from '../utils/schemas'
import { reactive } from 'vue'
import useStore from '../composables/useStore'

const layout = 'auth'

const { isLoading, toggleLoading, showMessage, showError } = useStore()

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
  password: '',
  confirmPassword: ''
})

const handleLogin = async ( event: FormSubmitEvent<LoginSchema> ) => {
  await $fetch('/api/auth/login', {
    method: 'POST',
    body: event.data
  })
}

const handleRegister = async ( event: FormSubmitEvent<RegisterSchema> ) => {
  await $fetch('/api/auth/register', {
    method: 'POST',
    body: event.data
  })
}

</script>

<template>
    <NuxtLayout :name="layout">
        <UTabs :items="items" variant="link" class="gap-4 w-full max-w-md" :ui="{ trigger: 'flex-1' }">
        <template #account="{ item }">
        <p class="text-(--ui-text-muted) mb-4">
            {{ item.description }}
        </p>

        <UForm :schema="loginSchema" :state="loginForm" class="flex flex-col gap-4" @submit="handleLogin">
            <UFormField label="Email" name="email" required>
              <UInput v-model="loginForm.email" class="w-full" required />
            </UFormField>
            <UFormField label="Password" name="password" required>
              <UInput v-model="loginForm.password" type="password" class="w-full" required/>
            </UFormField>
            <UButton label="Save changes" type="submit" variant="soft" class="self-end" />
        </UForm>
        </template>

        <template #password="{ item }">
        <p class="text-(--ui-text-muted) mb-4">
            {{ item.description }}
        </p>

        <UForm :schema="registerSchema" :state="registerForm" class="flex flex-col gap-4" @submit="handleRegister">
            <UFormField label="Email" name="email" required>
              <UInput v-model="registerForm.email" class="w-full" required />
            </UFormField>  
            <UFormField label="Name" name="name" required>
              <UInput v-model="registerForm.name" class="w-full" required />
            </UFormField>
            <UFormField label="Password" name="new" required>
              <UInput v-model="registerForm.password" type="password" required class="w-full" />
            </UFormField>
            <UFormField label="Confirm Password" name="confirm" required>
              <UInput v-model="registerForm.confirmPassword" type="password" required class="w-full" />
            </UFormField>
            <UButton label="Register" type="submit" variant="soft" class="self-end" />
        </UForm>
        </template>
    </UTabs>
    </NuxtLayout>
</template>