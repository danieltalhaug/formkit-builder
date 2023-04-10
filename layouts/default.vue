<template>
    <div class="bg-gray-200 h-screen grid grid-cols-3 gap-1">
        <aside>
            Components
        </aside>
        <main>
            <FormPreview :schema="schema" />
        </main>
    </div>
</template>

<script setup>
const schema = [
    {
        $el: 'h1',
        children: 'Register',
    },
    {
        $formkit: 'text',
        name: 'email',
        label: 'Email',
        help: 'This will be used for your account.',
        validation: 'required|email'
    },
    {
        $formkit: 'password',
        name: 'password',
        label: 'Password',
        help: 'Enter your new password.',
        validation: 'required|length:5,16'
    },
];
</script>