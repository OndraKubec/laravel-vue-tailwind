export default [{
    path: '/',
    component: () => import(/* webpackChunkName: "home" */ "../views/Home"),
    name: 'home'
}];