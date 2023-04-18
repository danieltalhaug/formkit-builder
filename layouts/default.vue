<template>
    <div class="bg-gray-100 h-screen grid grid-cols-4 gap-8 p-8">
        <aside class="card">
            <FormComponentSelector />
        </aside>
        <main class="card col-span-2">
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
        validation: 'required|email',
    },
    {
        $formkit: 'password',
        name: 'password',
        label: 'Password',
        help: 'Enter your new password.',
        validation: 'required|length:5,16',
    },
];
</script>

<style>
.card {
    @apply bg-white rounded p-8 ring-1 ring-gray-200;
}

</style>