import type { TLoginSchema } from "~/schemas/login";

import AuthAPI from "~/services/api/auth";

export default function () {
    const router = useRouter();

    const { showAlert } = useAlert();

    return {
        async login(credentials: TLoginSchema, remember: boolean = false) {
            try {
                const data = await AuthAPI.login(credentials);

                localStorage.setItem("token", data.token);

                if (!remember) {
                    window.addEventListener("beforeunload", () => {
                        localStorage.removeItem("token");
                    });
                }

                router.replace({ name: "index" });
            } catch (e) {
                showAlert({ message: "Credenciais inválidas" });
            }
        },
    };
}
