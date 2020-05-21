<template>
    <section>
        <span>
            <button
            @click="setToggledButton('project')">
                New Project
            </button>

            <button
            v-show="editorSelected.meta.type && !(editorSelected.meta.type == 'event')"
            @click="setToggledButton('event')">
                New Event
            </button>

            <button
            v-show="editorSelected.meta.type == 'project'"
            @click="setToggledButton('chapter')">
                New Chapter
            </button>

            <button
            v-show="editorSelected.meta.type == 'chapter'"
            @click="setToggledButton('scene')">
                New Scene
            </button>

            <br><br>
        </span>

        <span v-show="toggledButton">
            Name of the new {{ toggledButton }}
            <span v-show="!toggledButton == 'project'">
                in {{folderOfNewThing.type}} <strong>{{ folderOfNewThing.name }}</strong>
            </span>

            <br>

            <input v-model="nameOfNewThing">

            <button @click="createNewThing(nameOfNewThing, folderOfNewThing)">
                Confirm
            </button>

            <button @click="cancelNewThing()">
                Cancel
            </button>
        </span>

        <span v-show="unavailableName">
            <strong>{{ unavailableName }}</strong> is already the name of another {{ toggledButton }}
            <span v-show="!(toggledButton == 'project')">
                in {{folderOfNewThing.type}} <strong>{{ folderOfNewThing.name }}</strong>
            </span>
        </span>
    </section>
</template>

<script>
import { mapMutations, mapGetters, mapState } from 'vuex'

export default {
    name: 'BrowserButtons',


    data() {
        return {
            toggledButton: '',
            nameOfNewThing: '',
            folderOfNewThing: '',
            unavailableName: ''
        }
    },

    computed: {
        ...mapGetters([
            'eventTemplate',
            'editorSelected',
            'EventTemplate'
        ]),
        ...mapState(['editorState'])
    },

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
            this.unavailableName = ''
        },

        setToggledButton(button) {
            this.cancelNewThing()
            this.toggledButton = button
            this.folderOfNewThing = this.editorSelected.meta
        },


        createNewProject(name) {
            const newProject = {
                meta: {
                    name: name,
                    type: 'project',
                    level: 'state'
                },
                chapters: {},
                events: {},
                startingEvent: {},
                flagCategories: {
                    'Global': {
                        name: 'Global',
                        properties: {
                            visible: false,
                            usable: false
                        },
                        flags: {
                            'Example flag': {
                                name: 'Example flag',
                                value: true,
                                description: '',
                                effects: []
                            }
                        }
                    }
                },
                valueCategories: {
                    'Resources': {
                        name: 'Resources',
                        properties: {
                            visible: true,
                            usable: false
                        },
                        values: {
                            'Stamina': {
                                name: 'Stamina',
                                value: 10,
                                description: '',
                                effects: [],
                                lowerThreshold: 0,
                                upperThreshold: 'none',
                                decimals: 0
                            }
                        }
                    }
                }
            }
            this.addNewProject(newProject)
            this.cancelNewThing()
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
            this.cancelNewThing()
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
            this.cancelNewThing()
        },

        createNewEvent(name, folder) {
            const newEvent = {
                meta: {
                    name: name,
                    type: 'event',
                    level: folder.type
                },
                event: new this.EventTemplate()
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
            this.cancelNewThing()
        },

        createNewThing(name, folder) {
            // Helper functions for readability
            // dear god
            const editorState = this.editorState

            function nameIsInProjects() {
                return name in editorState.projects
            }

            function nameIsInChapters() {
                return name in
                editorState
                .projects[folder.name]
                .chapters
            }

            function nameIsInScenes() {
                return name in
                editorState
                .projects[folder.upperProject]
                .chapters[folder.name]
                .scenes
            }

            function eventIsInProject() {
                return name in
                editorState
                .projects[folder.name].events
            }

            function eventIsInChapter() {
                return name in
                editorState
                .projects[folder.upperProject]
                .chapters[folder.name].events
            }

            function eventIsInScenes() {
                return name in
                editorState
                .projects[folder.upperProject]
                .chapters[folder.upperChapter]
                .scenes[folder.name].events
            }


            if (this.toggledButton == 'project') {
                if (!nameIsInProjects()) {
                    this.createNewProject(name)
                } else {
                    this.unavailableName = name
                    // When unavailableName is truthy it shows the unavailable name error message
                }
            }

            if (this.toggledButton == 'chapter') {
                if (!nameIsInChapters()) {
                    this.createNewChapter(name, folder)
                } else {
                    this.unavailableName = name
                }
            }

            if (this.toggledButton == 'scene') {
                if (!nameIsInScenes()) {
                    this.createNewScene(name, folder)
                } else {
                    this.unavailableName = name
                }
            }

            if (this.toggledButton == 'event') {
                if (folder.type == 'project') {
                    if (eventIsInProject()) {
                        this.unavailableName = name
                    }
                } else if (folder.type == 'chapter') {
                    if (eventIsInChapter()) {
                        this.unavailableName = name
                    }
                } else if (folder.type == 'scene') {
                    if (eventIsInScenes()) {
                        this.unavailableName = name
                    }
                }

                if (!this.unavailableName) {
                    this.createNewEvent(name, folder)
                }
            }
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
