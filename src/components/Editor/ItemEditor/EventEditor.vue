<template>
    <section id="event-editor" class="editor">
        <span>Event Title</span>
        <input v-model="editedEvent.event.title">

        <paragraphs-editor :paragraphs="editedEvent.event.text" />

        <options-editor :options="editedEvent.event.options" />

        <span><button @click="saveEditedEvent()">
            Save Event
        </button></span>
    </section>
</template>

<script>
import { mapMutations } from 'vuex'

import ParagraphsEditor from './EventEditor/ParagraphsEditor.vue'
import OptionsEditor from './EventEditor/OptionsEditor.vue'

export default {
    name: 'EventEditor',

    props: ['editedEvent', 'paragraphData'],

    components: {
        ParagraphsEditor,
        OptionsEditor
    },


    methods: {
        ...mapMutations([
            'saveCurrentEditedEvent'
        ]),

        deleteParagraph(index) {
            this.editedEvent.event.text.splice(index, 1)
            this.paragraphData.splice(index, 1)
        },

        saveEditedEvent() {
            this.saveCurrentEditedEvent(this.editedEvent)
        }
    }
}
</script>

<style scoped>
* {
    margin: 10px
}

span {
    margin: 0;
}

p {
    margin: 0;
}

textarea {
    height: 100px;
    width: 100%
}

.event-editor-section {
    border-top: 4px lightblue solid;
}
</style>
