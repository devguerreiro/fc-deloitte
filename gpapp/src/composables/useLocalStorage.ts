export default function () {
    const TOKEN = "token";
    const USER_ID = "userID";
    const PROFILE = "profile";
    return {
        getToken() {
            return localStorage.getItem(TOKEN);
        },
        getUserID() {
            const userID = localStorage.getItem(USER_ID);
            if (userID) return Number(userID);
            return null;
        },
        getProfile() {
            const profile = localStorage.getItem(PROFILE);
            if (profile) return Number(profile);
            return null;
        },
        setToken(token: string) {
            localStorage.setItem(TOKEN, token);
        },
        setUserID(userID: number) {
            localStorage.setItem(USER_ID, String(userID));
        },
        setProfile(profile: number) {
            localStorage.setItem(PROFILE, String(profile));
        },
        clear() {
            localStorage.removeItem(TOKEN);
            localStorage.removeItem(USER_ID);
            localStorage.removeItem(PROFILE);
        },
    };
}
