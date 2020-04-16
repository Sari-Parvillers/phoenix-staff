<template>
    <aside id="EditorBrowser">
        <browser-buttons
        :selected="selected"/>
        <ul>
            <project-item
            v-for="(project, index) in editorState.projects"
            :key="index"
            :selected="selected"
            :project="project"/>
        </ul>
    </aside>
</template>


<script>
import BrowserButtons from './BrowserButtons.vue'
import ProjectItem from './BrowserFiles/ProjectItem.vue'

import { mapMutations, mapState } from 'vuex'
export default {
    name: 'Browser',
    components: {
        BrowserButtons,
        ProjectItem
    },

    data() {
        return {
            selected: {},

            creatingNewAct: "false",
            creatingNewScene: "false",
            creatingNewEvent: "false"
        }
    },

    computed: {
        ...mapState([
            'editorState'
        ])
    },

    methods: {
        ...mapMutations([
            'addAct'
        ]),
        setSelected(selection) {
            this.selected = selection.meta
        },

        toggleActCreation() {
            this.creatingNewAct = !this.creatingNewAct
        }
    }
}
</script>


<style scoped>
aside {
    display: grid;
    grid-template-rows: auto auto;
}

ul {
    font-size: 120%;
    list-style: none;
    padding: 0;
}
</style>
