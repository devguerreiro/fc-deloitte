<template>
    <v-app>
        <Title> {{ $route.meta.title }} - GPAPP </Title>
        <AppHeader />
        <AppNavbar />
        <v-main>
            <AppAlert class="t-w-1/3 t-absolute t-top-20 t-right-4 t-z-10" />
            <v-container class="t-mt-8">
                <slot />
            </v-container>
        </v-main>
    </v-app>
</template>
