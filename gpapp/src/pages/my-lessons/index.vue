<script setup lang="ts">
import { AuthProfile } from '~/services/api/auth';

definePageMeta({
    title: "Minhas Disciplinas",
    profiles: [AuthProfile.TEACHER],
});

const { state: authState } = useAuth();
const { state: teacherState, getTeacherLessons } = useTeacher();

await useAsyncData(
    async () => await getTeacherLessons(authState.value.userID as number)
);
</script>

<template>
    <div>
        <h1 class="t-text-2xl t-font-bold">Minhas Disciplinas</h1>
        <v-expansion-panels
            class="t-mt-8 t-flex t-flex-col t-gap-4"
            variant="accordion"
        >
            <div v-for="lesson in teacherState.lessons" :key="lesson.id">
                <v-expansion-panel :title="lesson.name.toUpperCase()">
                    <template #title>
                        <div
                            class="t-w-full t-flex t-justify-between t-items-center"
                        >
                            <h2>{{ lesson.name.toUpperCase() }}</h2>
                            <v-chip
                                class="t-mr-8"
                                color="success"
                                variant="elevated"
                            >
                                {{ lesson.load }}
                            </v-chip>
                        </div>
                    </template>
                    <template #text>
                        <div class="t-mt-4">
                            <v-card>
                                <v-card-title>
                                    <h3>Informações da Disciplina</h3>
                                </v-card-title>
                                <v-card-text>
                                    <div>
                                        <h4>Quantidade de Alunos</h4>
                                        <span>
                                            {{ lesson.students.length }}
                                        </span>
                                    </div>
                                    <div>
                                        <h4>Carga Horária</h4>
                                        <span>{{ lesson.load }}</span>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </div>
                        <div class="t-flex t-justify-center t-py-6">
                            <nuxt-link
                                :to="{
                                    name: 'my-lessons-id',
                                    params: {
                                        id: lesson.id,
                                    },
                                }"
                            >
                                <v-btn color="black" variant="elevated">
                                    Ver turma
                                </v-btn>
                            </nuxt-link>
                        </div>
                    </template>
                </v-expansion-panel>
                <v-divider
                    :thickness="2"
                    class="border-opacity-100"
                    color="success"
                />
            </div>
        </v-expansion-panels>
    </div>
</template>
