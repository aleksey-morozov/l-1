const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "Home" */'../pages/Home.vue'),
    },
    {
        path: '/hello',
        name: 'hello',
        component: () => import(/* webpackChunkName: "Hello" */'../pages/Hello.vue'),
    },
];

export default routes;
