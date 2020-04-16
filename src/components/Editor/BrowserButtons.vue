<template>
    <section>
        <span>
            <button
            @click="setToggledButton('project')">
                New Project
            </button>

            <button
            @click="setToggledButton('event')">
                New Event
            </button>

            <button
            v-show="editorSelected.type == 'project'"
            @click="setToggledButton('chapter')">
                New Chapter
            </button>

            <button
            v-show="editorSelected.type == 'chapter'"
            @click="setToggledButton('scene')">
                New Scene
            </button>
        </span>

        <span v-show="toggledButton">
            Name of the new {{ toggledButton }}
            <span v-show="toggledButton == 'chapter'"> in project <strong>{{ folderOfNewThing.name }}</strong></span>
            <br>

            <input v-model="nameOfNewThing">

            <button @click="createNewThing(nameOfNewThing, folderOfNewThing)">Confirm</button>

            <button @click="cancelNewThing()">Cancel</button>
        </span>
    </section>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
    name: 'BrowserButtons',


    data() {
        return {
            toggledButton: '',
            nameOfNewThing: '',
            folderOfNewThing: ''
        }
    },

    computed: mapGetters(['editorSelected']),

    methods: {
        ...mapMutations([
            'addNewProject',
            'addNewChapter',
            'addNewScene',
            'addNewEvent'
        ]),

        cancelNewThing() {
            this.toggledButton = ''
            this.nameOfNewThing = ''
            this.folderOfNewThing = ''
        },

        setToggledButton(button) {
            this.cancelNewThing()
            this.toggledButton = button
            this.folderOfNewThing = this.editorSelected
        },

        createNewProject(name) {
            const newProject = {
                meta: {
                    name: name,
                    type: 'project',
                    level: 'state'
                },
                chapters: {},
                events: {}
            }
            this.addNewProject(newProject)
        },

        createNewChapter(name, project) {
            const newChapter = {
                meta: {
                    name: name,
                    type: 'chapter',
                    level: 'project',
                    upperProject: project.name
                },
                scenes: {},
                events: {}
            }
            this.addNewChapter(newChapter)
        },

        createNewScene(name, chapter) {
            const newScene = {
                meta: {
                    name: name,
                    type: 'scene',
                    level: 'chapter',
                    upperProject: chapter.upperProject,
                    upperChapter: chapter.name
                },
                events: {}
            }
            this.addNewScene(newScene)
        },

        createNewEvent(name, folder) {
            const newEvent = {
                meta: {
                    name: name,
                    type: 'event',
                    level: folder.type
                }
            }
            let level = newEvent.meta.level
            if (level == 'project') {
                newEvent.meta.upperProject = folder.name
            }
            if (level == 'chapter') {
                newEvent.meta.upperProject = folder.upperProject
                newEvent.meta.upperChapter = folder.name
            }
            if (level == 'scene') {
                console.log(folder)
                newEvent.meta.upperProject = folder.upperProject
                newEvent.meta.upperChapter = folder.upperChapter
                newEvent.meta.upperScene = folder.name
            }
            this.addNewEvent(newEvent)
        },

        createNewThing(name, folder) {
            if (this.toggledButton == 'project') {
                this.createNewProject(name)
            }

            if (this.toggledButton == 'chapter') {
                this.createNewChapter(name, folder)
            }

            if (this.toggledButton == 'scene') {
                this.createNewScene(name, folder)
            }

            if (this.toggledButton == 'event') {
                this.createNewEvent(name, folder)
            }

            this.cancelNewThing()
        }
    }
}
</script>

<style scoped>
section {
    display: grid;
}

button {
    margin-right: 5px;
}

input {
    margin-right: 5px;
}
</style>
