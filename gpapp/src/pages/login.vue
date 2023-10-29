<script setup lang="ts">
definePageMeta({
    layout: "blank",
    title: "Login",
});
</script>

<template>
    <div class="t-h-screen t-w-screen t-flex t-justify-center t-items-center">
        <div class="t-w-3/5 t-flex">
            <div
                class="t-px-12 t-bg-black t-flex-1 t-flex t-justify-center t-items-center"
            >
                <img
                    src="/deloitte-logo.svg"
                    width="200"
                    height="200"
                    alt="Logo Deloitte"
                />
            </div>
            <div
                class="t-p-12 t-shadow-md t-flex-1 t-flex t-flex-col t-justify-center t-items-center"
            >
                <h1 class="text-h4">Login</h1>
                <LoginForm class="t-mt-8" />
            </div>
        </div>
    </div>
</template>
