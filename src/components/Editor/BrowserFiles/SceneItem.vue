<template>
    <li>
        <button
        :class='{ selected: isSelected }'
        @click="changeEditorSelected(scene.meta)"
        @keyup:enter="changeEditorSelected(scene.meta)">
            {{ scene.meta.name }}
        </button>
        <ul>
            <event-item
            v-for="(event, index) in scene.events"
            :key="index"
            :event="event"/>
        </ul>
    </li>
</template>

<script>
import EventItem from './EventItem.vue'

import { mapGetters, mapMutations } from 'vuex'
export default {
    name: 'SceneItem',
    props: ['scene'],
    components: { EventItem },

    computed: {
        ...mapGetters([
            'editorSelected'
        ]),

        isSelected() {
            return this.editorSelected.name == this.scene.meta.name
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
