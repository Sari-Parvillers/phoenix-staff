<template>
    <button
    :class='{ selected: isSelected }'
    @click="changeEditorSelected(file)"
    @keyup.enter="changeEditorSelected(file)">
        {{ file.meta.name }}
    </button>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: "FileButton",
    props: ['file'],

    computed: {
        ...mapGetters(['editorSelected']),

        isSelected() {
            return this.editorSelected.meta == this.file.meta
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
