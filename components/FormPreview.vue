<template>
    <draggable
        v-model="test"
        group="components"
        item-key="id"
        :animation="100"
        tag="form"
        handle=".formkit-outer"
    >
        <template #item="{ element }">
            <FormKitSchema :schema="test" />
        </template>
    </draggable>
</template>

<script setup>
// <!-- <FormKitSchema :schema="test" /> -->
import { ref } from 'vue';
import draggable from 'vuedraggable';
import { FormKitSchema } from '@formkit/vue';

const test = ref([]);

defineProps({
    schema: {
        type: Array,
        default: () => [],
    }
});
</script>