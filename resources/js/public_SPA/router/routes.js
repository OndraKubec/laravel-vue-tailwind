export default [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "js/home" */ "../views/Home"),
        name: 'home'
    },
    {
        path: '/about',
        component: () => import(/* webpackChunkName: "js/about" */ "../views/About"),
        name: 'about'
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import(/* webpackChunkName: "js/notFound" */ "../views/NotFound"),
        name: '404'
    }
];