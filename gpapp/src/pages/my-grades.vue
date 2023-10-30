<script setup lang="ts">
import { AuthProfile } from "~/services/api/auth";

definePageMeta({
    title: "Minhas Notas",
    profiles: [AuthProfile.STUDENT],
});

const { state: studentState, getStudentGrades } = useStudent();
const { state: authState } = useAuth();

await useAsyncData(
    async () => await getStudentGrades(authState.value.userID as number)
);

const gradesHeader = computed(() => {
    if (studentState.value.grades && studentState.value.grades.length) {
        return Array(studentState.value.grades[0].grades.length)
            .fill(null)
            .map((_, index) => `Nota ${index + 1}`);
    }
    return [];
});

const headers = computed(() => {
    return ["Disciplina", ...gradesHeader.value, "Média"];
});

const getGradeAverage = (grades: Array<number>) => {
    return (grades.reduce((acc, v) => acc + v, 0) / grades.length || 0).toFixed(
        2
    );
};
</script>

<template>
    <div>
        <h1 class="t-text-2xl t-font-bold">Minhas Notas</h1>
        <v-sheet elevation="2" class="t-mt-8">
            <v-table fixed-header hover style="max-height: 475px">
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
                    <tr v-for="item in studentState.grades" :key="item.id">
                        <td>{{ item.lesson.name.toUpperCase() }}</td>
                        <td v-for="grade in item.grades" :key="grade">
                            {{ grade }}
                        </td>
                        <td>{{ getGradeAverage(item.grades) }}</td>
                    </tr>
                </tbody>
            </v-table>
        </v-sheet>
    </div>
</template>
