<template>
    <Title>
        {{ $route.meta.title }}
    </Title>
    <v-app>
        <v-app-bar></v-app-bar>
        <v-navigation-drawer></v-navigation-drawer>
        <v-main>
            <v-container>
                <slot />
            </v-container>
        </v-main>
    </v-app>
</template>
