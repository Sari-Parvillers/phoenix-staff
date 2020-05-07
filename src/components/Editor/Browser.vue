<template>
    <aside id="EditorBrowser">
        <browser-buttons
        :selected="selected"/>
        <browser-files />
    </aside>
</template>


<script>
import BrowserButtons from './Browser/BrowserButtons.vue'
import BrowserFiles from './Browser/BrowserFiles.vue'

import { mapMutations, mapState } from 'vuex'
export default {
    name: 'Browser',
    components: {
        BrowserButtons,
        BrowserFiles
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
</style>
