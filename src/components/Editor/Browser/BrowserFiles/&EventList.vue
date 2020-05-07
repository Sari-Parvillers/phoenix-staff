<template>
    <ul id="event-list">
        <li v-for="(event, index) in events" :event="event" :key="index">
            <file-button :file="event"/>
        </li>
    </ul>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import FileButton from './&FileButton.vue'

export default {
    name: 'EventList',
    props: ['events'],
    components: { FileButton },

    computed: {
        ...mapGetters([
            'editorSelected'
        ]),

        isSelected() {
            return this.editorSelected.meta == this.event.meta
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

    padding: inherit;
    margin: inherit;

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
#event-list {
    list-style: circle;
}
</style>
