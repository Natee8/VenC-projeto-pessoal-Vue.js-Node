import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { createPinia } from "pinia";
import { useAuthStore } from "./infrastructure/stores/auth/authStore";

const notyf = new Notyf({
  duration: 3000,
  position: { x: "right", y: "top" },
  dismissible: true,
});

const app = createApp(App);

app.config.globalProperties.$notyf = notyf;

const pinia = createPinia();
app.use(pinia);
app.use(router);

const auth = useAuthStore();
auth.loadFromStorage();

app.mount("#app");
