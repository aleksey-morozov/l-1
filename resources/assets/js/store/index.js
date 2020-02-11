import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import { INIT_VIEW_ID } from './index/action.types';
import { SET_VIEW_ID } from './index/mutation.types';

const state = {
    viewId: 0,
};

const actions = {
    [INIT_VIEW_ID]({ commit }, value) {
        commit(SET_VIEW_ID, value);
    }
};

const mutations = {
    [SET_VIEW_ID](state, viewId) {
        state.viewId = viewId;
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions
})
