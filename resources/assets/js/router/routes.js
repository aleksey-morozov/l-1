export default [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "Home" */'../views/Home.vue'),
    },
    {
        path: '/loans',
        name: 'loans',
        component: () => import(/* webpackChunkName: "Loans" */'../views/Loans.vue'),
    },
    {
        path: '/loans-add',
        name: 'loans_add',
        component: () => import(/* webpackChunkName: "LoansAdd" */'../views/LoansAdd.vue'),
    },
    {
        path: '/credits',
        name: 'credits',
        component: () => import(/* webpackChunkName: "Credits" */'../views/Credits.vue'),
    },
    {
        path: '/emission-add',
        name: 'emission_add',
        component: () => import(/* webpackChunkName: "EmissionAdd" */'../views/EmissionAdd.vue'),
    },
    {
        path: '/emission-edit',
        name: 'emission_edit',
        component: () => import(/* webpackChunkName: "EmissionEdit" */'../views/EmissionEdit.vue'),
    },
];
