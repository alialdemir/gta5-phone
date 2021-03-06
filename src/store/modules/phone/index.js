import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const defaultState = {
    isShowMobile: true,

    soundList: [],

    apps: [],

    config: {
        apps: [],
        language: {},
        background_default: {
            value: ''
        }
    }
}

const inBrowser = typeof window !== 'undefined';
// if in browser, use pre-fetched state injected by SSR
const state = (inBrowser && window.__INITIAL_STATE__) ? window.__INITIAL_STATE__.page : defaultState;

export default {
    state,
    actions,
    mutations,
    getters
}