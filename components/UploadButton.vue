<template>
    <CldUploadWidget 
        v-slot="{ open }" 
        :uploadPreset="uploadPreset" 
        :onSuccess="handleUpload" 
        :onResult="handleUpload"
        :onError="handleError"
        >
        <UCard @click="open" class="cursor-pointer h-36 flex justify-center items-center">
            <div class="flex flex-col justify-center items-center w-full">
                <Icon name="lucide:upload" class="mb-2 size-6" />
                <div class="text-xs text-muted-foreground mt-4 text-center">
                    {{ isVideo ? 'Upload Video' : 'Upload Image' }}
                </div>
            </div>
        </UCard>
    </CldUploadWidget>
</template>

<script setup lang="ts">


// const config = useRuntimeConfig()
// const uploadPreset = config.public.uploadPreset
const uploadPreset = 'nuxt_lms'

interface UploadButtonProps {
    isVideo?: boolean
    allowedFormats: string[]
}

defineProps<UploadButtonProps>()

const emit = defineEmits(['onChange'])

// interface Result {
//     info?: {
//         secure_url?: string
//     } | string
// }

const handleUpload = (result: any) => {
    const secureUrl = result?.info?.secure_url || result?.secure_url || result?.url

    if (secureUrl) {
        emit('onChange', secureUrl);
    } else {
        console.error('Secure URL not found in result:', result);
    }
}

const handleError = (error: any) => {
    console.error('Upload error:', error)
}

</script>