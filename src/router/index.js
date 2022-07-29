import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Brokerbet from "../views/Brokerbet.vue";
import Report from "../views/Report.vue";
import SportBet from "../views/SportBet.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/brokerbet",
    name: "Brokerbet",
    component: Brokerbet,
  },
  {
    path: "/report",
    name: "Report",
    component: Report,
  },
  {
    path: "/sportBet",
    name: "SportBet",
    component: SportBet,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to,from,savedPosition){
    return savedPosition || {top:0}
  }
});

export default router;
