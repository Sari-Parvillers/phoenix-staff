<template>
    <li>
        <button
        :class='{ selected: isSelected }'
        @click="changeEditorSelected(chapter.meta)"
        @keyup:enter="changeEditorSelected(chapter.meta)">
            {{ chapter.meta.name }}
        </button>
        <ul>
            <scene-item
            v-for="(scene, index) in chapter.scenes"
            :key="index"
            :scene="scene"/>
            <event-item
            v-for="(event, index) in chapter.events"
            :key="index"
            :event="event"/>
        </ul>
    </li>
</template>

<script>
import SceneItem from './SceneItem.vue'
import EventItem from './EventItem.vue'

import { mapGetters, mapMutations } from 'vuex'
export default {
    name: 'ChapterItem',
    props: ['chapter'],
    components: { SceneItem, EventItem },

    computed: {
        ...mapGetters([
            'editorSelected'
        ]),

        isSelected() {
            return this.editorSelected.name == this.chapter.meta.name
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
