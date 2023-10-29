import type { TLoginSchema } from "~/schemas/login";

import AuthAPI from "~/services/api/auth";

export default function () {
    const router = useRouter();

    const { showAlert } = useAlert();

    return {
        async login(credentials: TLoginSchema, remember: boolean = false) {
            try {
                const data = await AuthAPI.login(credentials);

                if (remember) {
                    localStorage.setItem("token", data.token);
                }

                router.push("/");
            } catch (e) {
                showAlert({ message: "Credenciais inválidas" });
            }
        },
    };
}
