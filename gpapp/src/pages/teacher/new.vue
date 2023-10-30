<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";

import TeacherSchema, { type TTeacherSchema } from "~/schemas/teacher";

definePageMeta({
    title: "Cadastro de Professores",
});

const router = useRouter();

const { errors, handleSubmit, defineComponentBinds } = useForm({
    validationSchema: toTypedSchema(TeacherSchema),
});

const name = defineComponentBinds("name");
const email = defineComponentBinds("email");
const password = defineComponentBinds("password");
const confirm = defineComponentBinds("confirm");
const dob = defineComponentBinds("dob");

const dobBR = computed(() => dob.value.modelValue?.toLocaleDateString("pt-br"));

const showDatePicker = ref(false);

const { createTeacher } = useTeacher();

const onSubmit = handleSubmit(async (data: TTeacherSchema) => {
    await createTeacher(data);
    router.push({ name: "index" });
});
</script>

<template>
    <v-sheet elevation="2" class="t-p-12">
        <div class="t-flex t-justify-between">
            <h1 class="t-text-2xl t-font-bold">Novo Professor</h1>
            <v-btn color="red" @click="router.back()">Voltar</v-btn>
        </div>
        <v-form class="t-mt-6" @submit="onSubmit">
            <v-text-field
                label="Nome do Professor"
                variant="solo-filled"
                prepend-inner-icon="mdi-label"
                v-bind="name"
                :error-messages="errors.name"
            />
            <v-text-field
                label="E-mail"
                variant="solo-filled"
                prepend-inner-icon="mdi-email"
                type="email"
                v-bind="email"
                :error-messages="errors.email"
            />
            <v-text-field
                label="Senha"
                type="password"
                variant="solo-filled"
                prepend-inner-icon="mdi-lock"
                v-bind="password"
                :error-messages="errors.password"
            />
            <v-text-field
                label="Confirmação Senha"
                type="password"
                variant="solo-filled"
                prepend-inner-icon="mdi-lock"
                v-bind="confirm"
                :error-messages="errors.confirm"
            />
            <v-text-field
                label="Data de Nascimento"
                variant="solo-filled"
                prepend-inner-icon="mdi-calendar-month"
                :error-messages="errors.dob"
                :model-value="dobBR"
                @focus="showDatePicker = true"
            />
            <v-locale-provider locale="pt-br">
                <v-date-picker
                    v-if="showDatePicker"
                    header="Selecione uma data"
                    cancel-text="Cancelar"
                    title="Data de Nascimento"
                    ok-text="OK"
                    v-bind="dob"
                    @click:cancel="showDatePicker = false"
                    @click:save="showDatePicker = false"
                >
                    <template #header> </template>
                </v-date-picker>
            </v-locale-provider>
            <v-btn
                class="t-mt-4"
                width="100%"
                color="success"
                size="large"
                type="submit"
            >
                Cadastrar
            </v-btn>
        </v-form>
    </v-sheet>
</template>
