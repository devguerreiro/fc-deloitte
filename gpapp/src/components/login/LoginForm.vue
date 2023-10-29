<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";

import LoginSchema from "@/schemas/login";

const { login } = useAuth();

const { errors, handleSubmit, isSubmitting, defineComponentBinds } = useForm({
    validationSchema: toTypedSchema(LoginSchema),
});
const email = defineComponentBinds("email", {
    validateOnBlur: false,
    validateOnModelUpdate: false,
});
const password = defineComponentBinds("password", {
    validateOnBlur: false,
    validateOnModelUpdate: false,
});

const remember = ref(false);
const showPassword = ref(false);

const handleLogin = handleSubmit(async (values) => {
    await login(values, remember.value);
});
</script>

<template>
    <v-form class="t-w-full" @submit="handleLogin">
        <v-text-field
            v-bind="email"
            :error-messages="errors.email"
            label="E-mail"
            type="email"
            prepend-inner-icon="mdi-email-outline"
        />
        <v-text-field
            v-bind="password"
            :error-messages="errors.password"
            label="Senha"
            :type="showPassword ? 'text' : 'password'"
            prepend-inner-icon="mdi-lock-outline"
            append-inner-icon="mdi-eye-outline"
            @click:append-inner="showPassword = !showPassword"
        />
        <div class="t-w-full t-flex t-justify-between t-items-center">
            <v-checkbox hide-details v-model="remember">
                <template #label>
                    <span class="t-text-sm">Manter conectado?</span>
                </template>
            </v-checkbox>
            <a href="#">
                <span class="t-text-sm t-text-green-500">
                    Esqueceu a senha?
                </span>
            </a>
        </div>
        <v-btn class="t-mt-4" color="success" width="100%" type="submit">
            {{ isSubmitting ? "Acessando..." : "Acessar" }}
        </v-btn>
    </v-form>
</template>
