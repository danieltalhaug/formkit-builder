import { ref } from 'vue';

export function useForm() {
    const formSchema = ref([]);

    function addSchemaObject(schemaObj) {
        formSchema.push(schemaObj);
    }

    return { formSchema, addSchemaObject }
};