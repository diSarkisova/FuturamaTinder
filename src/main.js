import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/index.scss";
import store from "./store";
import router from "./router";
import "./plugins/swiper.js";

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
