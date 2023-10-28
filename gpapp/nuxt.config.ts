// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    runtimeConfig: {
        public: {
            BASE_URL: process.env.BASE_URL,
        },
    },
    srcDir: "src",
});
