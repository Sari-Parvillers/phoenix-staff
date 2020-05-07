import Vue from 'vue'

const state = {
    editorCurrentItem: {
        event: {},
        meta: {}
    },
    editorSelected: {
        meta: {}
    },
    projects: {}
}

const getters = {
    editorCurrentItem(state) {
        return state.editorCurrentItem
    },

    editorSelected(state) {
        return state.editorSelected
    }
}

const mutations = {
    changeEditorCurrentItem(state, payload) {
        state.editorCurrentItem = payload
    },

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
            Vue.set(
                state
                .projects[payload.meta.upperProject]
                .chapters[payload.meta.upperChapter]
                .scenes[payload.meta.upperScene]
                .events,

                payload.meta.name, payload
            )
        }
    },

    saveCurrentEditedEvent(state, payload) {
        console.log(state)
        if (payload.meta.upperScene) {
            state
            .projects[payload.meta.upperProject]
            .chapters[payload.meta.upperChapter]
            .scenes[payload.meta.upperScene]
            .events[payload.meta.name] = payload

        } else if (payload.meta.upperChapter) {
            state
            .projects[payload.meta.upperProject]
            .chapters[payload.meta.upperChapter]
            .events[payload.meta.name] = payload

        } else {
            state
            .projects[payload.meta.upperProject]
            .events[payload.meta.name] = payload
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
