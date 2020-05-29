<template>
    <section>
        <strong>∟ Option outcome  </strong>
        <button @click="collapsed = !collapsed">
            <span v-show="collapsed">Expand ↓</span>
            <span v-show="!collapsed">Collapse →</span>
        </button>

        <div v-if="!collapsed"
        class="content">
            <option-default-outcome-editor :defaultOutcome="outcome.default"
            :optionIndex="optionIndex"/>

            <option-conditional-outcome-editor v-for="(outcome, index) in outcome.conditionals"
            :outcome="outcome"
            :key="index"
            :index="index"
            :optionIndex="optionIndex" />

            <button @click="addConditionalOutcome()">
                + Conditional outcome
            </button>
        </div>
    </section>
</template>

<script>
import Vue from 'vue'

import OptionDefaultOutcomeEditor from './OptionOutcomeEditor/OptionDefaultOutcomeEditor.vue'
import OptionConditionalOutcomeEditor from './OptionOutcomeEditor/OptionConditionalOutcomeEditor'
import { mapGetters } from 'vuex'

export default {
    name: 'OptionOutcomeEditor',
    props: ['outcome', 'optionIndex'],
    components: {
        OptionDefaultOutcomeEditor,
        OptionConditionalOutcomeEditor
    },

    data() {
        return {
            collapsed: false
        }
    },

    computed: {
        ...mapGetters(['conditionTemplate'])
    },

    methods: {
        addConditionalOutcome() {
            const newOutcome = {
                leadsTo: {},
                effects: [],
                conditions: this.conditionTemplate
            }

            const index = this.outcome.conditionals.length

            Vue.set(this.outcome.conditionals, index, newOutcome)
        }
    }
}
</script>

<style>

</style>
