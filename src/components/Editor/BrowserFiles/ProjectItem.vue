<template>
    <li>
        <button
        :class='{ selected: isSelected }'
        @click="changeEditorSelected(project.meta)"
        @keyup:enter="changeEditorSelected(project.meta)">
            {{ project.meta.name }}
        </button>
        <ul>
            <chapter-item
            v-for="(chapter, index) in project.chapters"
            :key="index"
            :chapter="chapter" />
            <event-item
            v-for="(event, index) in project.events"
            :key="index"
            :event="event"/>
        </ul>
    </li>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import ChapterItem from './ChapterItem.vue'
import EventItem from './EventItem.vue'

export default {
    name: 'ProjectItem',
    props: ['project'],
    components: { ChapterItem, EventItem },

    computed: {
        ...mapGetters([
            'editorSelected'
        ]),

        isSelected() {
            return this.editorSelected.name == this.project.meta.name
        }
    },

    methods: mapMutations(['changeEditorSelected'])
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

    border: inherit;
    padding: inherit;
    margin: inherit;

    background: inherit;
    color: inherit;

    align-items: inherit;
    display: inherit;
    box-sizing: inherit;
}

button:hover, button:focus {
    outline: 0;
    cursor: pointer;
    color: rgb(138, 156, 255);
    text-decoration: underline;
}


.selected {
    border: 1px solid skyblue;
}
</style>
