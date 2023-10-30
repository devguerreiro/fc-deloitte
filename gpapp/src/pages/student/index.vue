<script setup lang="ts">
definePageMeta({
    title: "Alunos",
});

const { state: studentState, getStudents } = useStudent();

await useAsyncData(async () => await getStudents());

const headers = ["Nome", "E-mail", "Data de Nascimento"];
</script>

<template>
    <div>
        <div class="t-flex t-justify-between t-items-center">
            <h1 class="t-text-2xl t-font-bold">Alunos</h1>
            <nuxt-link :to="{ name: 'student-new' }">
                <v-btn color="black">Novo Aluno</v-btn>
            </nuxt-link>
        </div>
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
                    <tr
                        v-for="student in studentState.students"
                        :key="student.id"
                    >
                        <td>{{ student.name.toUpperCase() }}</td>
                        <td>{{ student.email }}</td>
                        <td>{{ student.dob }}</td>
                    </tr>
                </tbody>
            </v-table>
        </v-sheet>
    </div>
</template>
