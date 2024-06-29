<template>
    <Card class="card">
        <template #title>
            <i :class="'pi' + ' ' + iconName"></i>
            {{ title }}
        </template>
        <template #content>
            <p class="m-0">
                {{ description }}
            </p>
        </template>
        <template #footer>
            <div class="flex gap-4 mt-1">
                <Button
                    label="View"
                    class="w-full"
                    icon="pi pi-eye"
                    @click="$emit('view', { title })"
                />
            </div>
        </template>
    </Card>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    iconName: {
        type: String,
        required: true,
    },
    description: String,
})
defineEmits(['view'])
</script>

<style scoped>
.p-card {
    width: 25rem;
    overflow: hidden;
    padding: 40px;
    margin: 20px;
    border: 1px;
    border-style: solid;
    font-family: 'Courier New', Courier, monospace;
}
.p-button {
    margin-right: 10px;
}
</style>
