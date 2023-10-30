<template>
    <v-app>
        <Title> {{ $route.meta.title }} - GPAPP </Title>
        <AppAlert class="t-w-1/3 t-absolute t-top-4 t-right-4 t-z-10" />
        <v-main>
            <slot />
        </v-main>
    </v-app>
</template>
