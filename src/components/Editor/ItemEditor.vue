<template>
    <main id="item-editor">
        <section id="event-editor-meta">
            <h1>This is the editor.</h1>

            <button
            v-show="editorSelected.meta.type == 'event' || editorSelected.meta.type == 'project'"
            @click="changeEditedItem()">
                Edit selected {{editorSelected.meta.type}}
            </button>

            <span
            class="button-placeholder"
            v-show="editorSelected.meta.type != 'event' || editorSelected.meta.type != 'project'">
                Select an event or a project to edit
            </span>

            <h3 v-show="editorCurrentItem.meta.name">
                Currently editing {{editorCurrentItem.meta.type}} <strong>{{ editorCurrentItem.meta.name }}</strong>

                <span v-show ="editorCurrentItem.meta.type != 'project'">
                    in project <strong>{{ editorCurrentItem.meta.upperProject}}</strong>

                    <span v-show="editorCurrentItem.meta.upperChapter">
                        ; chapter <strong>{{ editorCurrentItem.meta.upperChapter}}</strong>
                    </span>

                    <span v-show="editorCurrentItem.meta.upperScene">
                        ; scene <strong>{{ editorCurrentItem.meta.upperScene}}</strong>
                    </span>
                </span>
            </h3>
        </section>

        <event-editor
        v-if="editedItem.meta.type == 'event'"
        :editedEvent="editedItem"
        :paragraphData="paragraphData"
        class="editor"/>

        <project-editor
        v-if="editedItem.meta.type == 'project'"
        :editedProject="editedItem"
        class="editor"/>
    </main>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Vue from 'vue'

import EventEditor from './ItemEditor/EventEditor.vue'
import ProjectEditor from './ItemEditor/ProjectEditor.vue'

export default {
    name: "ItemEditor",
    components: {
        EventEditor,
        ProjectEditor
    },

    data() {
        return {
            editedItem: {
                meta: {}
            },
            paragraphData: []
        }
    },

    computed: {
        ...mapGetters([
            'editorCurrentItem',
            'editorSelected',
            'EventTemplate'
        ])
    },

    methods: {
        ...mapMutations([
            'changeEditorCurrentItem'
        ]),

        changeEditedItem() {
            this.paragraphData = []
            this.changeEditorCurrentItem(this.editorSelected)
            this.editedItem = this.editorCurrentItem

            if (this.editedItem.type == 'event') {
                for (let index = 0; index < this.editedItem.event.text.length; index++) {
                    Vue.set(this.paragraphData, index, { conditionManager : false })
                }
            }
        },

        logStuff() {
            console.log(this.paragraphTemplate)
        }
    }
}
</script>

<style>
.edit-option {
    margin-top: 0;
    margin-bottom: 8px;
}
</style>

<style scoped>
main {
    margin-left: 1%;
    border-right: 8px solid lightyellow;
}

#event-editor-meta {
    border-bottom: 8px solid lightyellow;
    margin-bottom: 1%
}

h3 {
    font-weight: 100;
}

strong {
    color: lightgoldenrodyellow;
}
</style>
