<script setup lang="ts">
import { type ILessonGrade } from "~/services/api/lesson";

definePageMeta({
    title: "Disciplina",
});

const route = useRoute();

const { state: lessonState, getLesson, updateStudentGrades } = useLesson();

await useAsyncData(
    async () => await getLesson(route.params.id as unknown as number)
);

const lessonName = computed(() => lessonState.value.lesson?.name.toUpperCase());

const gradesHeader = computed(() => {
    if (
        lessonState.value.lesson?.students &&
        lessonState.value.lesson.students[0].grades &&
        lessonState.value.lesson.students[0].grades.length
    ) {
        return Array(lessonState.value.lesson.students[0].grades.length)
            .fill(null)
            .map((_, index) => `Nota ${index + 1}`);
    }
    return [];
});

const headers = computed(() => {
    return ["Aluno", ...gradesHeader.value, "Média", ""];
});

const getGradeAverage = (grades: Array<number>) => {
    return (
        grades.reduce((acc, v) => acc + Number(v), 0) / grades.length || 0
    ).toFixed(2);
};

const isEditing = ref(false);
const studentEditing = ref<ILessonGrade | null>(null);

const startEditing = (student: ILessonGrade) => {
    isEditing.value = true;
    studentEditing.value = student;
};

const saveChanges = async () => {
    await updateStudentGrades(lessonState.value.lesson?.id as number, {
        student: studentEditing.value?.student.id as number,
        grades: studentEditing.value?.grades as Array<number>,
    });
    isEditing.value = false;
    studentEditing.value = null;
};
</script>

<template>
    <div>
        <h1 class="t-text-2xl t-font-bold">
            {{ lessonName }}
        </h1>
        <v-card class="t-mt-6" style="padding: 2rem">
            <v-card-title>
                <h3>Informações da Disciplina</h3>
            </v-card-title>
            <v-card-text>
                <div>
                    <h4>Quantidade de Alunos</h4>
                    <span>
                        {{ lessonState.lesson?.students.length }}
                    </span>
                </div>
                <div>
                    <h4>Carga Horária</h4>
                    <span>{{ lessonState.lesson?.load }}</span>
                </div>
            </v-card-text>
        </v-card>
        <v-sheet class="t-mt-12 t-p-8" elevation="2">
            <h2>Nota dos Alunos</h2>
            <v-table
                class="t-mt-4"
                fixed-header
                hover
                style="max-height: 475px"
            >
                <thead>
                    <tr>
                        <th
                            class="text-left"
                            v-for="header in headers"
                            :key="header"
                        >
                            {{ header }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="student in lessonState.lesson?.students"
                        :key="student.id"
                    >
                        <td>
                            {{ student.student.name.toUpperCase() }}
                        </td>
                        <td
                            v-for="(grade, index) in student.grades"
                            :key="index"
                        >
                            <v-text-field
                                v-if="
                                    isEditing &&
                                    studentEditing?.student.id ===
                                        student.student.id
                                "
                                type="number"
                                variant="solo"
                                hide-details
                                class="t-py-4"
                                v-model="studentEditing.grades[index]"
                                style="max-width: 75px"
                            />
                            <span v-else>{{ grade }}</span>
                        </td>
                        <td>
                            {{ getGradeAverage(student.grades) }}
                        </td>
                        <td>
                            <v-icon
                                v-if="!isEditing"
                                icon="mdi-pencil"
                                @click="() => startEditing(student)"
                                color="success"
                            />
                            <template v-else>
                                <v-icon
                                    icon="mdi-close"
                                    @click="isEditing = false"
                                    color="success"
                                />
                                <v-icon
                                    class="t-ml-4"
                                    icon="mdi-content-save"
                                    @click="saveChanges"
                                    color="black"
                                />
                            </template>
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </v-sheet>
    </div>
</template>
