<template>
    <v-app>
        <Title> {{ $route.meta.title }} - GPAPP </Title>
        <AppHeader />
        <AppNavbar />
        <v-main>
            <v-container class="t-mt-8">
                <slot />
            </v-container>
        </v-main>
    </v-app>
</template>
