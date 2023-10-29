<template>
    <v-app-bar color="black">
        <template #prepend>
            <nuxt-link :to="{ name: 'index' }">
                <img
                    class="t-ml-12"
                    src="/deloitte-logo.svg"
                    width="125"
                    height="50"
                    alt="Logo Deloitte"
                />
            </nuxt-link>
        </template>
    </v-app-bar>
</template>
