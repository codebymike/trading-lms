<template>
    <CldUploadWidget 
        v-slot="{ open }" 
        uploadPreset="nuxt-cloudinary-unsigned" 
        :options="{ clientAllowedFormats: allowedFormats, resourceType: undefined}" 
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

const config = useRuntimeConfig()

interface UploadButtonProps {
    isVideo?: boolean
    allowedFormats: string[]
}

defineProps<UploadButtonProps>()

const emit = defineEmits(['onChange'])

interface Result {
    info?: {
        secure_url?: string
    } | string
}

const handleUpload = (result: Result) => {

    console.log('Upload result:', result)
    const secureUrl = typeof result.info === 'object' && result.info?.secure_url 
        ? result.info.secure_url 
        : typeof result.info === 'string' 
        ? result.info 
        : undefined;

    if (secureUrl) {
        console.log('Secure URL:', secureUrl);
        emit('onChange', secureUrl);
    } else {
        console.error('Secure URL not found in result:', result);
    }
}

const handleError = (error: any) => {
    console.error('Upload error:', error)
}

</script>