import Vue from 'vue'

const state = {
    editorSelected: {},
    projects: {}
}

const getters = {
    editorSelected(state) {
        return state.editorSelected
    }
}

const mutations = {
    changeEditorSelected(state, payload) {
        state.editorSelected = payload
    },

    addNewProject(state, payload) {
        Vue.set(state.projects, payload.meta.name, payload)
    },

    addNewChapter(state, payload) {
        Vue.set(
            state
            .projects[payload.meta.upperProject]
            .chapters,

            payload.meta.name, payload
        )
    },

    addNewScene(state, payload) {
        Vue.set(
            state
            .projects[payload.meta.upperProject]
            .chapters[payload.meta.upperChapter]
            .scenes,

            payload.meta.name, payload
        )
    },

    addNewEvent(state, payload) {
        const level = payload.meta.level
        if (level === 'project') {
            Vue.set(
                state
                .projects[payload.meta.upperProject]
                .events,

                payload.meta.name, payload
            )
        } else if (level === 'chapter') {
            Vue.set(
                state
                .projects[payload.meta.upperProject]
                .chapters[payload.meta.upperChapter]
                .events,

                payload.meta.name, payload
            )
        } else if (level === 'scene') {
            console.log(payload)
            console.log(state.projects[payload.meta.upperProject])
            Vue.set(
                state
                .projects[payload.meta.upperProject]
                .chapters[payload.meta.upperChapter]
                .scenes[payload.meta.upperScene]
                .events,

                payload.meta.name, payload
            )
        }
    }
}

const actions = {}

export default {
    state,
    getters,
    mutations,
    actions
}
