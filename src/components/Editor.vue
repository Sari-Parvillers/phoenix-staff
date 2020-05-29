<template>
    <body>
        <item-editor/>
        <browser />
    </body>
</template>

<script>
// TODO: Divide the template into components rather than this ugly mess
// TODO: map the editor state and show it on the screen -> option to select and edit the editor state

import { mapState } from 'vuex'


import Browser from "./Editor/Browser.vue"
import ItemEditor from "./Editor/ItemEditor.vue"

export default {
    name: 'Editor',
    components: {
        Browser,
        ItemEditor
    },

    data() {
        return {
            currentEvent: {}
        }
    },

    computed: {
        ...mapState([
                'editorState'
        ])
    },

    methods: {
        saveEvent() {
            // mutate state in store to edit event
            return
        }
    }
}
</script>

<style scoped>
body {
    display: grid;
    grid-template-columns: 75% 25%;
}

</style>
