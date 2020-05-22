<template>
    <section id="event-editor" class="editor">
        <span>Event Title</span>
        <input v-model="editedEvent.event.title">

        <span>Event text</span>
        <p v-for="(paragraph, index) in editedEvent.event.text"
        :key="index">
            <textarea v-model="editedEvent.event.text[index].paragraph" />
            <button
            @click="toggleConditionManager(index)">Add conditions</button>

            <section id="conditionManager">
                <condition-manager :conditions="editedEvent.event.text[index].conditions"
                :uniqueKey="`paragraph${index} ` + uniqueKey"/>
            </section>

            <button @click="deleteParagraph(index)">Delete paragraph</button>
        </p>

        <span v-show="editedEvent.event.text"><button
        @click="addNewParagraph()">
            + Paragraph
        </button></span>

        <span><button @click="saveEditedEvent()">
            Save Event
        </button></span>
    </section>
</template>

<script>
import ConditionManager from './ConditionManager.vue'
import { mapGetters, mapMutations } from 'vuex'
import Vue from 'vue'


export default {
    name: 'EventEditor',

    props: ['editedEvent', 'paragraphData'],

    components: {
        ConditionManager
    },


    computed: {
        ...mapGetters([
            'paragraphTemplate'
        ]),

        uniqueKey() {
            let key = `in event ${this.editedEvent.meta.name}`
            if (this.editedEvent.meta.upperScene) {
                key += ` in Scene ${this.editedEvent.meta.upperScene}`
            }
            if (this.editedEvent.meta.upperChapter) {
                key += ` in Chapter ${this.editedEvent.meta.upperChapter}`
            }
            key += ` in Project ${this.editedEvent.meta.upperProject}`

            return key
        }
    },


    methods: {
        ...mapMutations([
            'saveCurrentEditedEvent'
        ]),

        addNewParagraph() {
            this.editedEvent.event.text.push(this.paragraphTemplate)

            Vue.set(this.paragraphData, this.paragraphData.length, { conditionManager: false })
        },

        deleteParagraph(index) {
            this.editedEvent.event.text.splice(index, 1)
            this.paragraphData.splice(index, 1)
        },

        toggleConditionManager(index) {
            this.paragraphData[index].conditionManager = !this.paragraphData[index].conditionManager
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
</style>
