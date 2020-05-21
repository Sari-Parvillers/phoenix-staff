<template>
    <section>
        <section
        id="project-editor-starting-event"
        class="project-editor-section">
            <p class="edit-option">Starting Event:
                <span v-if="!editedProject.startingEvent.meta">
                    <i>No event set as starting event</i>
                </span>
                <span v-else>
                    <i>{{ editedProject.startingEvent.meta.name }}</i>
                </span>
            </p>


            <span class="button-placeholder">Select an event</span>
        </section>

        <flag-editor
        class="project-editor-section"
        :flagCategories="editedProject.flagCategories"/>
        <value-editor
        class="project-editor-section"
        :valueCategories="editedProject.valueCategories" />

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
/* Styling in here should specifically concern flag-editor and value-editor */
.project-editor-section {
    padding: 1px;
    margin: 1px;
    border-bottom: 4px solid lightgrey;
}

.category-list {
    list-style: none;
    padding: 1%;
    margin: 0;
}

.category-list-info {
    padding: 1%
}

.project-category {
    border: 3px solid lightblue;
    margin-bottom: 8px;
}

.project-category-title {
    margin: 1px;
    margin-bottom: 4px;
}

.category-section {
    border-bottom: 1px solid grey;
}

.category-editor {
    border-bottom: 1px solid grey;
    margin-left: 4px;
}

.project-category-item-editor {
    border: 2px solid lightblue;
}

.project-category-item-editor > * {
    margin: 4px;
}
</style>
