<script setup lang="ts">
const { isStudent, isTeacher, isCoordinator, isAdmin, logout } = useAuth();
</script>

<template>
    <div>
        <v-navigation-drawer expand-on-hover rail>
            <v-list density="comfortable" nav>
                <nuxt-link
                    v-if="isStudent || isAdmin"
                    :to="{ name: 'my-grades' }"
                >
                    <v-list-item
                        prepend-icon="mdi-account-school"
                        title="Minhas Notas"
                    />
                </nuxt-link>
                <nuxt-link
                    v-if="isTeacher || isAdmin"
                    :to="{ name: 'my-lessons' }"
                >
                    <v-list-item
                        prepend-icon="mdi-human-male-board"
                        title="Minhas Disciplinas"
                    />
                </nuxt-link>
                <template v-if="isCoordinator || isAdmin">
                    <nuxt-link :to="{ name: 'lesson-new' }">
                        <v-list-item
                            prepend-icon="mdi-school"
                            title="Disciplinas"
                        />
                    </nuxt-link>
                    <nuxt-link :to="{ name: 'student-new' }">
                        <v-list-item
                            prepend-icon="mdi-account-school"
                            title="Alunos"
                        />
                    </nuxt-link>
                    <nuxt-link :to="{ name: 'teacher-new' }">
                        <v-list-item
                            prepend-icon="mdi-human-male-board"
                            title="Professores"
                        />
                    </nuxt-link>
                </template>
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
