<script setup lang="ts">
const { logout } = useAuth();
</script>

<template>
    <div>
        <v-navigation-drawer expand-on-hover rail>
            <v-list density="comfortable" nav>
                <v-list-item
                    prepend-icon="mdi-account-school"
                    title="Minhas Notas"
                />
                <v-list-item
                    prepend-icon="mdi-human-male-board"
                    title="Minhas Disciplinas"
                />
                <v-list-item prepend-icon="mdi-school" title="Disciplinas" />
                <v-list-item prepend-icon="mdi-account-school" title="Alunos" />
                <v-list-item
                    prepend-icon="mdi-human-male-board"
                    title="Professores"
                />
            </v-list>
            <template #append>
                <v-list-item class="t-mb-4" prepend-icon="mdi-logout">
                    <v-btn
                        width="100%"
                        color="red"
                        variant="elevated"
                        @click="logout"
                    >
                        Logout
                    </v-btn>
                </v-list-item>
            </template>
        </v-navigation-drawer>
    </div>
</template>
