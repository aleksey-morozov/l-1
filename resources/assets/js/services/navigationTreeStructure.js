export default [
    {
        id: 1,
        name: 'Эмиссии и организации',
        children: [
            {
                id: 2,
                name: 'Кредиты',
                children: [
                    {
                        id: 3,
                        name: 'Госзакупки',
                        children: [
                            { id: 4, name: 'Закупки', to: '/loans', },
                            { id: 5, name: 'Добавить закупку', to: '/loans-add', },
                        ],
                    },
                    { id: 6, name: 'Кредиты', to: '/credits', },
                ],
            },
            {
                id: 7,
                name: 'Эмиссии',
                children: [
                    { id: 8, name: 'Добавить облигацию', to: '/emission-add', },
                    { id: 9, name: 'Редактировать эмиссию', to: '/emission-edit', },
                ],
            },
        ],
    },
];
