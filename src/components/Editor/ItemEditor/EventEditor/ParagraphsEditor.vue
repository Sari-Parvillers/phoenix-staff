<template>
    <section class="event-editor-section">
        <h3>Event text</h3>

        <paragraph-item-editor v-for="(paragraph, index) in paragraphs"
        :key="index"
        :index="index"
        :paragraph="paragraph"
        @delete-paragraph="deleteParagraph($event)" />

        <button @click="addNewParagraph()">
            + Paragraph
        </button>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'

import ParagraphItemEditor from './ParagraphsEditor/ParagraphItemEditor.vue'

export default {
    name: "ParagraphsEditor",
    props: ['paragraphs'],
    components: {
        ParagraphItemEditor
    },

    computed: {
        ...mapGetters([
            'paragraphTemplate'
        ])
    },

    methods: {
        addNewParagraph() {
            this.paragraphs.push(this.paragraphTemplate)
        },

        deleteParagraph(itemIndex) {
            this.paragraphs.splice(itemIndex, 1)
        }
    }
}
</script>

<style>
.paragraph-text {
    width: 100%;
}
</style>
