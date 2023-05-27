// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],

    devtools: {
        enabled: true
    },

    app: {
        head: {
            title: "Leksika",
            link: [
                { rel: "stylesheet", href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" },
            ]
        }
    }
})
