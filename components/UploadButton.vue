<template>
    <CldUploadWidget v-slot="{ open }" uploadPreset="nuxt-cloudinary-unsigned" :options="{ clientAllowedFormats: allowedFormats, resourceType: undefined}" :onUpload="handleUpload">
        <UCard @click="open" class="cursor-pointer h-36 flex justify-center items-center" :ui="{ 
            shadow: 'shadow-none', 
            background: 'bg-transparent',
            rounded: 'rounded-none'}">
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
    info: {
        secure_url: string
    }
}

const handleUpload = (result: Ref<Result>) => {

    console.log('Upload result:', result.value)
    console.log(result.value.info.secure_url)

    emit('onChange', result.value.info.secure_url)
}

</script>