<template>
    <section>
        <section>
            <span>Starting Event</span>
            <button>Select an event</button>
        </section>

        <flag-editor :flagCategories="editedProject.flagCategories"/>

        <section>
            <span>Values</span>
            <ul>List of categories
                <li>
                    <ul>Category1
                        <li>Value1</li> °true °false
                        <li>Value2</li> °true °false
                        <button>Add value</button>
                    </ul>
                </li>
            </ul>
            <button>Add category</button>
        </section>
    </section>
</template>

<script>
import FlagEditor from './ProjectEditor/FlagEditor.vue'

export default {
    name: 'ProjectEditor',
    props: [
        'editedProject'
    ],
    components: {
        FlagEditor
    }
}
</script>

<style>


</style>
