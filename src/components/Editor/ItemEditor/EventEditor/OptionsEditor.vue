<template>
    <section class="event-editor-section">
        <h3>Options</h3>

        <option-item-editor v-for="(option, index) in options"
        :key="index"
        :index="index"
        :option="option" />

        <button @click="addNewOption()">
            + Option
        </button>
    </section>
</template>

<script>
import OptionItemEditor from './OptionsEditor/OptionItemEditor.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'OptionsEditor',
    props: ['options'],
    components: {
        OptionItemEditor
    },

    computed: {
        ...mapGetters(['optionTemplate'])
    },

    methods: {
        addNewOption() {
            this.options.push(this.optionTemplate)
        }
    }
}
</script>

<style>

</style>
