<template>
    <div class="card flex justify-center">
        <Dialog
            v-model:visible="props.visible"
            :style="{ width: '80%', maxWidth: '90vw' }"
            :closable="false"
            :dismissable-mask="true"
            :draggable="false"
            contentStyle="overflow: visible"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
        >
            <div class="pdf-container">
                <PDF :src="getPdfSrc(title)" :pdfWidth="dynamicPdfWidth" />
            </div>
            <Button label="Close" icon="pi pi-times" @click="$emit('close')" />
        </Dialog>
    </div>
</template>

<script setup>
import PDF from 'pdf-vue3'
import { defineProps, defineEmits, ref, watch, computed } from 'vue'

const props = defineProps({
    visible: {
        type: Boolean,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
})
defineEmits(['close'])

const screenWidth = ref(window.innerWidth)

// Watch for window resize to update screenWidth
watch(
    () => window.innerWidth,
    (newWidth) => {
        screenWidth.value = newWidth
    }
)

// Compute dynamic PDF width based on screenWidth
const dynamicPdfWidth = computed(() => {
    if (screenWidth.value < 576) {
        return '100%' // Adjust as needed for smaller screens
    } else {
        return '50%' // Default width for larger screens
    }
})

// Function to get PDF source based on title
const getPdfSrc = (title) => {
    // Replace with your logic to map titles to PDF sources
    switch (title) {
        case 'SGS':
            return './Placeholder.pdf'
        case 'Employee Handbook':
            return './Placeholder.pdf'
        case 'Employee Onboarding':
            return './Onboarding.pdf'
        default:
            return
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');

.pdf-container {
    width: 100%;
    max-width: 100%;
    height: 70vh; /* Adjust height as needed */
    overflow: auto;
}

.pdf {
    width: 100%;
    height: 100%;
}

.p-button {
    margin: 20px;
    font-family: 'Roboto';
}
</style>
