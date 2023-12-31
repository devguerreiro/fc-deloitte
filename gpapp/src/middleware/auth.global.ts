export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
        const { state: authState } = useAuth();
        const token = authState.value.token;
        if (!token && from.name !== "login" && to.name !== "login") {
            return navigateTo({ name: "login" });
        } else if (!!token && to.name === "login") {
            return navigateTo({ name: "index" });
        }
    }
});
