import type { AuthProfile } from "~/services/api/auth";

export default defineNuxtRouteMiddleware((to) => {
    if (process.client) {
        const { state: authState } = useAuth();
        const profile = authState.value.profile;

        const { showAlert } = useAlert();

        if (
            profile !== null &&
            to.meta.profiles &&
            !(to.meta.profiles as AuthProfile[]).includes(profile)
        ) {
            showAlert({ message: "Acesso negado" });
            return abortNavigation();
        }
    }
});
