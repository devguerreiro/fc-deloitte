interface IAlertState {
    message: string;
    type?: "error" | "success" | "warning" | "info";
    variant?: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    timeout?: number;
}

const defaultAlert: IAlertState = {
    message: "",
    type: "error",
    variant: "tonal",
    timeout: 5000,
};

export default function () {
    const state = useState("alert", () => ({
        ...defaultAlert,
        open: false,
    }));

    const closeAlert = () => {
        state.value = {
            ...defaultAlert,
            open: false,
        };
    };

    const showAlert = (options: IAlertState) => {
        closeAlert();

        setTimeout(() => {
            state.value = {
                ...defaultAlert,
                ...options,
                open: true,
            };
        }, 100);

        setTimeout(() => {
            closeAlert();
        }, state.value.timeout);
    };

    return {
        state,
        closeAlert,
        showAlert,
    };
}
