<template>
    <v-app>
        <Title> {{ $route.meta.title }} - GPAPP </Title>
        <AppHeader />
        <AppNavbar />
        <v-main>
            <v-container>
                <slot />
            </v-container>
        </v-main>
    </v-app>
</template>
