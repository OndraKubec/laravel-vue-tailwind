export default [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "home" */ "../views/Home"),
        name: 'home'
    },
    {
        path: '/about',
        component: () => import(/* webpackChunkName: "home" */ "../views/About"),
        name: 'about'
    }
];