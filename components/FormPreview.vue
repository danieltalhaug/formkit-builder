<template>
    <form class="bg-white rounded p-8">
        <FormKitSchema :schema="schema" />
    </form>
</template>

<script setup>
import { FormKitSchema } from '@formkit/vue';

defineProps({
    schema: {
        type: Array,
        default: () => [],
    }
});
</script>