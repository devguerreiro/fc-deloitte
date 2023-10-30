import type { TLoginSchema } from "~/schemas/login";

export enum AuthProfile {
    STUDENT = 0,
    TEACHER = 1,
    COORDINATOR = 2,
    ADMIN = 3,
}

interface ILoginData {
    token: string;
    user_id: number;
    profile: AuthProfile;
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
