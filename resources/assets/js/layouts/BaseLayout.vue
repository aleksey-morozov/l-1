<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" app>
            <app-navigation-list></app-navigation-list>
        </v-navigation-drawer>
        <v-app-bar app color="indigo" dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar>
        <v-content>
            <v-container fluid fill-height>
                <slot></slot>
            </v-container>
        </v-content>
        <v-footer color="indigo" app>
            <span class="white--text">&copy; 2020</span>
        </v-footer>
    </v-app>
</template>

<script>
    import AppNavigationList from '../components/AppNavigationList.vue';
    export default {
        components: { AppNavigationList },
        data: () => ({
            drawer: null
        })
    }
</script>
