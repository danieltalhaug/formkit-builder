<template>
    <header class="mb-8">
        <h2 class="text-lg">Components</h2>
        <p class="text-sm">Drag and drop components over to build your form</p>
    </header>

    <draggable
        :list="components"
        group="components"
        :group="{ name: 'components', pull: 'clone', put: false }"
        :sort="false"
        :clone="cloneSchemaObj"
        item-key="id"
        :animation="100"
        class="grid grid-cols-3 gap-2"
    >
        <template #item="{element: component}">
            <div
                tabindex="0"
                class="p-4 bg-gray-100 hover:bg-gray-50 rounded cursor-move text-center text-gray-600 aspect-square transition-all"
            >
                {{component.title}}
            </div>
        </template>
    </draggable>
</template>

<script setup>
import draggable from 'vuedraggable';
import { nanoid } from 'nanoid';

function cloneSchemaObj(evt) {
    const { schemaObject } = evt;

    return {
        ...schemaObject,
        id: nanoid(),
    };
}

const components = [
    {
        title: 'Title',
        schemaObject: {
            $el: 'h1',
            children: 'Register',
        },
    },
    {
        title: 'Input',
        schemaObject: {
            $formkit: 'text',
            name: 'email',
            label: 'Email',
            help: 'This will be used for your account.',
            validation: 'required|email',
        },
    },
    {
        title: 'Textarea',
        schemaObject: {
            $formkit: 'text',
            name: 'email',
            label: 'Email',
            help: 'This will be used for your account.',
            validation: 'required|email',
        },
    },
    {
        title: 'Checkbox',
        schemaObject: {
            $formkit: 'text',
            name: 'email',
            label: 'Email',
            help: 'This will be used for your account.',
            validation: 'required|email',
        },
    },
    {
        title: 'Color',
        schemaObject: {
            $formkit: 'text',
            name: 'email',
            label: 'Email',
            help: 'This will be used for your account.',
            validation: 'required|email',
        },
    },
    {
        title: 'Date',
        schemaObject: {
            $formkit: 'text',
            name: 'email',
            label: 'Email',
            help: 'This will be used for your account.',
            validation: 'required|email',
        },
    },
    {
        title: 'Textarea',
        schemaObject: {
            $formkit: 'text',
            name: 'email',
            label: 'Email',
            help: 'This will be used for your account.',
            validation: 'required|email',
        },
    },
    {
        title: 'Checkbox',
        schemaObject: {
            $formkit: 'text',
            name: 'email',
            label: 'Email',
            help: 'This will be used for your account.',
            validation: 'required|email',
        },
    },
    {
        title: 'Color',
        schemaObject: {
            $formkit: 'text',
            name: 'email',
            label: 'Email',
            help: 'This will be used for your account.',
            validation: 'required|email',
        },
    },
    {
        title: 'Date',
        schemaObject: {
            $formkit: 'text',
            name: 'email',
            label: 'Email',
            help: 'This will be used for your account.',
            validation: 'required|email',
        },
    },
];
</script>