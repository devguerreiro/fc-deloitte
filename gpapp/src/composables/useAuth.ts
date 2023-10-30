import type { TLoginSchema } from "@/schemas/login";

import AuthAPI, { AuthProfile } from "@/services/api/auth";

interface IAuthState {
    token: string | null;
    userID: number | null;
    profile: AuthProfile | null;
}

export default function () {
    const router = useRouter();

    const { showAlert } = useAlert();

    const {
        clear,
        setToken,
        setUserID,
        setProfile,
        getToken,
        getUserID,
        getProfile,
    } = useLocalStorage();

    const state = useState<IAuthState>("auth", () => {
        if (process.client) {
            return {
                token: getToken(),
                userID: getUserID(),
                profile: getProfile(),
            };
        }
        return {
            token: null,
            userID: null,
            profile: null,
        };
    });

    const setState = (newState: IAuthState) => {
        state.value = newState;
    };

    return {
        state,

        async login(credentials: TLoginSchema, remember: boolean = false) {
            try {
                const data = await AuthAPI.login(credentials);

                setToken(data.token);
                setUserID(data.user_id);
                setProfile(data.profile);

                setState({
                    token: data.token,
                    userID: data.user_id,
                    profile: data.profile,
                });

                if (!remember) {
                    window.addEventListener("beforeunload", clear);
                }

                router.replace({ name: "index" });
            } catch (e) {
                showAlert({ message: "Credenciais inválidas" });
            }
        },

        logout() {
            setState({
                token: null,
                userID: null,
                profile: null,
            });
            clear();
            router.replace({ name: "login" });
        },
    };
}
