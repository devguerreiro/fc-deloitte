<template>
    <v-app>
        <Title> {{ $route.meta.title }} - GPAPP </Title>
        <AppAlert />
        <v-main>
            <slot />
        </v-main>
    </v-app>
</template>
