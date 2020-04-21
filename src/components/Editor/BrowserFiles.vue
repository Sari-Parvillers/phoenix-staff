<template>
    <ul id="project-list">
        <li v-for="(project, index) in editorState.projects" :project="project" :key="index">
            <file-button :fileMeta="project.meta"/>

            <button @click="toggleDirectory(project.meta.name, 'projects')">
                <span alt="Close project" v-show="project.meta.name in openDirectories.projects">
                    | ↓ |
                </span>
                <span alt="Open project" v-show="!(project.meta.name in openDirectories.projects)">
                    | → |
                </span>
            </button>

            <div v-show="project.meta.name in openDirectories.projects">
                <event-list :events="project.events"/>
                <ul>
                    <li v-for="(chapter, index) in project.chapters" :chapter="chapter" :key="index">
                        <file-button :fileMeta="chapter.meta"/>

                        <button @click="toggleDirectory(project.meta.name + chapter.meta.name, 'chapters')">
                            <span alt="Close project" v-show="project.meta.name + chapter.meta.name in openDirectories.chapters">
                            | ↓ |
                            </span>
                            <span alt="Open project" v-show="!(project.meta.name + chapter.meta.name in openDirectories.chapters)">
                            | → |
                            </span>
                        </button>

                        <div v-show="project.meta.name + chapter.meta.name in openDirectories.chapters">
                            <event-list :events="chapter.events"/>
                            <ul>
                                <li v-for="(scene, index) in chapter.scenes" :scene="scene" :key="index">
                                    <file-button :fileMeta="scene.meta"/>

                                    <button
                                    @click="toggleDirectory(project.meta.name + chapter.meta.name + scene.meta.name, 'scenes')">
                                        <span alt="Close project"
                                        v-show="project.meta.name + chapter.meta.name + scene.meta.name in openDirectories.scenes">
                                        | ↓ |
                                        </span>
                                        <span alt="Open project"
                                        v-show="!(project.meta.name + chapter.meta.name + scene.meta.name in openDirectories.scenes)">
                                        | → |
                                        </span>
                                    </button>

                                    <event-list :events="scene.events"
                                    v-show="project.meta.name + chapter.meta.name + scene.meta.name in openDirectories.scenes"/>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</template>

<script>
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'

import FileButton from './BrowserFiles/&FileButton.vue'
import EventList from './BrowserFiles/&EventList.vue'

export default {
    name: 'BrowserFiles',
    props: ['project'],
    components: { FileButton, EventList },

    data() {
        return {
            openDirectories: {
                projects: {},
                chapters: {},
                scenes: {}
            }
        }
    },

    computed: {
        ...mapState([ 'editorState' ])
    },

    methods: {
        ...mapMutations(['changeEditorSelected']),

        logStuff(stuff) {
            console.log(stuff)
        },

        toggleDirectory(directory, type) {
            if (directory in this.openDirectories[type]) {
                Vue.delete(this.openDirectories[type], directory)
                console.log()
            } else {
                Vue.set(this.openDirectories[type], directory, true)
            }
        }
    }
}
</script>

<style scoped>
button {
    font: inherit;
    color: lightskyblue;

    text-align: inherit;
    text-indent: inherit;
    text-rendering: inherit;
    text-shadow: inherit;
    text-transform: inherit;

    letter-spacing: inherit;
    word-spacing: inherit;

    padding: inherit;
    margin-right: 4px;
    margin-bottom: 4px;

    background: inherit;
    color: inherit;

    align-items: inherit;
    display: inline-block;
    box-sizing: inherit;
}

button:hover, button:focus {
    outline: 0;
    cursor: pointer;
    color: rgb(138, 156, 255);
    text-decoration: underline;
}

ul {
    list-style: '∟';
    font-size: 1.2rem;
}

#project-list {
    list-style: '- ';
}
</style>
