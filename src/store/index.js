import Vuex from "vuex"
import Vue from "vue"

import events from "./modules/events.js"
import flags from "./modules/flags.js"
import gameState from "./modules/gameState.js"
import editorState from "./modules/editorState.js"

Vue.use(Vuex)



export default new Vuex.Store({
    modules: {
        events,
        flags,
        gameState,
        editorState
    }
})
