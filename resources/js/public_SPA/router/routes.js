export default [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "home" */ "../views/Home"),
        name: 'home'
    },
    {
        path: '/about',
        component: () => import(/* webpackChunkName: "about" */ "../views/About"),
        name: 'about'
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import(/* webpackChunkName: "notFound" */ "../views/NotFound"),
        name: '404'
    }
];