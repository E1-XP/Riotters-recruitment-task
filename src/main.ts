import { createApp } from "vue";
import { createPinia } from "pinia";

import "@/../node_modules/normalize-scss/sass/normalize/_import-now.scss";

import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());

app.mount("#app");
