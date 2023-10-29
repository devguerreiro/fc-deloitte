import type { TLoginSchema } from "~/schemas/login";

interface ILoginData {
    token: string;
}

export default class AuthAPI {
    static async login(data: TLoginSchema) {
        return await useAPI<ILoginData>("auth/", {
            method: "POST",
            body: {
                username: data.email,
                password: data.password,
            },
        });
    }
}
