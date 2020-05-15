<template>
    <section>
        <section>
            <span>Starting Event</span>
            <button>Select an event</button>
        </section>

        <flag-editor :flagCategories="editedProject.flagCategories"/>
        <value-editor :valueCategories="editedProject.valueCategories" />

    </section>
</template>

<script>
import FlagEditor from './ProjectEditor/FlagEditor.vue'
import ValueEditor from './ProjectEditor/ValueEditor.vue'

export default {
    name: 'ProjectEditor',
    props: [
        'editedProject'
    ],
    components: {
        FlagEditor,
        ValueEditor
    }
}
</script>

<style>


</style>
