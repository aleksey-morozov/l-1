<template>
    <v-container>
        <v-treeview class="body-2"
            dense
            :items="items"
            :open-on-click="true"
            :open="open"
            item-key="id"
            v-model="tree"
        >
            <template v-slot:prepend="{ item, open }">
                <v-icon size="18" v-if="item.children && item.children.length > 0">
                    {{ open ?  'mdi-folder-open' : 'mdi-folder' }}
                </v-icon>
            </template>
            <template slot="label" slot-scope="props">
                <template v-if="props.item.to">
                    <router-link class="tree-view-link" :to="props.item.to">{{ props.item.name }}</router-link>
                </template>
                <template v-else>
                    {{ props.item.name }}
                </template>
            </template>
        </v-treeview>
    </v-container>
</template>

<script>
    import treeStructure from '../services/navigationTreeStructure';
    export default {
        name: 'AppNavigationList',
        computed: {
            viewId() {
                return this.$store.state.viewId;
            },
        },
        data: () => ({
            tree: [],
            open: [],
            items: treeStructure,
        }),
        created() {
            if (this.viewId > 0) {
                this.open = this.getOpenIds();
            }
        },
        methods: {
            getOpenIds() {
                const relations = Object.create(null);
                const getRelations = (data, currentId = 0) => {
                    data.forEach(item => {
                        relations[item.id] = currentId;
                        if (item.children && item.children.length > 0) {
                            getRelations(item.children, item.id);
                        }
                    });
                };

                getRelations(treeStructure, this.viewId);

                const results = [];

                if (Object.keys(relations).length > 0) {
                    const getRelId = function (relations, searchId) {
                        if (relations[searchId]) {
                            results.push(relations[searchId]);
                            if (relations[searchId] !== searchId) {
                                const nextId = relations[searchId];
                                delete relations[searchId];
                                getRelId(relations, nextId);
                            }
                        }
                    };

                    getRelId(relations, this.viewId);
                }

                return results;
            },
        },
    }
</script>
<style scoped>
    .tree-view-link {
        color: rgba(0, 0, 0, 0.87);
        text-decoration: none;
    }
</style>
