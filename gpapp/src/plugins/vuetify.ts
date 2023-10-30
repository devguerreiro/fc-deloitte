import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { VDatePicker } from "vuetify/lib/labs/components.mjs";

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        components: {
            VDatePicker,
        },
    });
    app.vueApp.use(vuetify);
});
