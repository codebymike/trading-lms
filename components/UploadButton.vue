<template>
    <CldUploadWidget v-slot="{ open }" uploadPreset="nuxt-cloudinary-unsigned" :options="{ clientAllowedFormats: allowedFormats, resourceType: undefined}" :on-upload=handleUpload>

    </CldUploadWidget>
</template>

<script lang="ts">
import { d } from "~/node_modules/vue-bundle-renderer/dist/shared/vue-bundle-renderer.c34a8f50"


const { public: { uploadPreset } } = useRuntimeConfig()

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

    console.log('Upload result:', result)
    console.log(result.value.info)

    // emit('onChange', secure_url)
}

</script>