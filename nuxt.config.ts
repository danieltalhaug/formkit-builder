// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "@formkit/nuxt"],
    ssr: false,
    app: {
        baseURL: '/formkit-builder/',
    },
})
