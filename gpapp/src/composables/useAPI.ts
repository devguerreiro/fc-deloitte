import type { NitroFetchRequest, NitroFetchOptions } from "nitropack";

export default async function <T>(
    url: NitroFetchRequest,
    options?: NitroFetchOptions<NitroFetchRequest>
): Promise<T> {
    const {
        public: { BASE_URL },
    } = useRuntimeConfig();

    const fetch = $fetch.create({
        baseURL: BASE_URL,
    });

    return await fetch(url, {
        ...options,
        onRequest: ({ options }) => {
            if (process.client) {
                const { state: authState } = useAuth();
                const token = authState.value.token;
                if (token) {
                    options.headers = {
                        Authorization: `Token ${token}`,
                    };
                }
            }
        },
    });
}
