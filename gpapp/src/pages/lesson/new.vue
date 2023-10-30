<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";

import LessonSchema, { type TLessonSchema } from "~/schemas/lesson";

definePageMeta({
    title: "Cadastro de Disciplina",
});

const { state: studentState, getStudents } = useStudent();
const { state: teacherState, getTeachers } = useTeacher();
const { createLesson } = useLesson();
const router = useRouter();

await useAsyncData(async () => {
    await Promise.all([getStudents(), getTeachers()]);
});

const { errors, handleSubmit, defineComponentBinds } = useForm({
    validationSchema: toTypedSchema(LessonSchema),
});

const name = defineComponentBinds("name");
const teacher = defineComponentBinds("teacher");
const load = defineComponentBinds("load");
const students = defineComponentBinds("students");

const onSubmit = handleSubmit(async (data: TLessonSchema) => {
    await createLesson(data);
    router.push({ name: "lesson" });
});
</script>

<template>
    <v-sheet elevation="2" class="t-p-12">
        <div class="t-flex t-justify-between">
            <h1 class="t-text-2xl t-font-bold">Nova Disciplina</h1>
            <v-btn color="red" @click="router.back()">Voltar</v-btn>
        </div>
        <v-form class="t-mt-6" @submit="onSubmit">
            <v-text-field
                label="Nome da Disciplina"
                variant="solo-filled"
                prepend-inner-icon="mdi-label"
                v-bind="name"
                :error-messages="errors.name"
            />
            <v-select
                label="Professor"
                variant="solo-filled"
                prepend-inner-icon="mdi-human-male-board"
                :items="teacherState.teachers"
                item-title="name"
                item-value="id"
                no-data-text="Nenhum professor cadastrado"
                v-bind="teacher"
                :error-messages="errors.teacher"
            />
            <!-- @vue-ignore -->
            <v-text-field
                label="Carga Horária"
                type="number"
                variant="solo-filled"
                prepend-inner-icon="mdi-clock"
                v-bind="load"
                :error-messages="errors.load"
            />
            <v-select
                label="Alunos"
                variant="solo-filled"
                multiple
                prepend-inner-icon="mdi-account-school"
                :items="studentState.students"
                item-title="name"
                item-value="id"
                no-data-text="Nenhum aluno cadastrado"
                v-bind="students"
                :error-messages="errors.students"
            />
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
