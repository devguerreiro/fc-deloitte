<template>
    <v-app>
        <Title> {{ $route.meta.title }} - GPAPP </Title>
        <v-app-bar></v-app-bar>
        <v-navigation-drawer></v-navigation-drawer>
        <v-main>
            <v-container>
                <slot />
            </v-container>
        </v-main>
    </v-app>
</template>
