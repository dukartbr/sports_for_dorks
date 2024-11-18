const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/news",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/News.vue") }],
  },
  {
    path: "/roster",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Roster.vue") }],
  },
  {
    path: "/stats",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Stats.vue") }],
  },
  {
    path: "/history",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/History.vue") }],
  },
  {
    path: "/season",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Season.vue") }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
