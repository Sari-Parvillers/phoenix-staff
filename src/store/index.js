import Vuex from "vuex"
import Vue from "vue"

import gameState from "./modules/gameState.js"
import events from "./modules/events.js"

Vue.use(Vuex)



export default new Vuex.Store({
    modules: {
        gameState,
        events
    }
})
