import { createApp } from "vue";
import { createPinia } from "pinia";
import "virtual:windi.css";
import router from "@/routers";
import App from "./App.vue";

// 加载样式文件
import "@/styles/base.scss";

function render() {
  const app = createApp(App);
  const pinia = createPinia();
  app.use(router).use(pinia);
  app.mount("#app");
}
render();
