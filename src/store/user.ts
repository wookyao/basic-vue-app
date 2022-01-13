import { defineStore } from "pinia";
import { cookieSet, cookieGet } from "@/utils/cookies";

export const useUserStore = defineStore({
  id: "UserStore",
  state: () => ({
    token: cookieGet("token") || "",
  }),
  actions: {
    setToken(payload: string) {
      cookieSet("token", payload);
      this.token = payload;
    },
  },
});
