<template>
    <CldUploadWidget v-slot="{ open }" uploadPreset="nuxt-cloudinary-unsigned" :options="{ clientAllowedFormats: allowedFormats, resourceType: undefined}" :on-upload=handleUpload>
        
    </CldUploadWidget>
</template>

<script lang="ts">

const { public: { uploadPreset } } = useRuntimeConfig()

</script>