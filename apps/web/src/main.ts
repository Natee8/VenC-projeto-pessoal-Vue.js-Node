import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { createPinia } from "pinia";

const notyf = new Notyf({
  duration: 3000,
  position: { x: "right", y: "top" },
  dismissible: true,
});

const app = createApp(App);

app.config.globalProperties.$notyf = notyf;

app.use(router);
app.use(createPinia());
app.mount("#app");
