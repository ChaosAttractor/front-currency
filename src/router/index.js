import Vue from "vue";
import VueRouter from "vue-router";
import Base from "@/views/Layout/Base.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: Base,
    children: [
      {
        path: "/",
        name: "Currency",
        component: () => import("@/views/CurrencyView.vue"),
      },
      {
        path: "/daily",
        name: "Daily",
        component: () => import("@/views/DailyView.vue"),
      },
      {
        path: "/*",
        name: "CurrencyRedirect",
        component: () => import("@/views/CurrencyView.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.Base,
  routes,
});

export default router;
