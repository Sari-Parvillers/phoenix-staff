<template>
    <button
    :class='{ selected: isSelected }'
    @click="changeEditorSelected(fileMeta)"
    @keyup:enter="changeEditorSelected(fileMeta)">
        {{ fileMeta.name }}
    </button>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: "FileButton",
    props: ['fileMeta'],

    computed: {
        ...mapGetters(['editorSelected']),

        isSelected() {
            return this.editorSelected == this.fileMeta
        }
    },

    methods: mapMutations(['changeEditorSelected'])
}
</script>

<style>
.selected {
    border: 2px inset skyblue;
}
</style>
