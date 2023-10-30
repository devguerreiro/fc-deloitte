<script setup lang="ts">
definePageMeta({
    title: "Professores",
});

const { state: teacherState, getTeachers } = useTeacher();

await useAsyncData(async () => await getTeachers());

const headers = ["Nome", "E-mail", "Data de Nascimento"];
</script>

<template>
    <div>
        <div class="t-flex t-justify-between t-items-center">
            <h1 class="t-text-2xl t-font-bold">Professores</h1>
            <nuxt-link :to="{ name: 'teacher-new' }">
                <v-btn color="black">Novo Professor</v-btn>
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
                        v-for="teacher in teacherState.teachers"
                        :key="teacher.id"
                    >
                        <td>{{ teacher.name.toUpperCase() }}</td>
                        <td>{{ teacher.email }}</td>
                        <td>{{ teacher.dob }}</td>
                    </tr>
                </tbody>
            </v-table>
        </v-sheet>
    </div>
</template>
