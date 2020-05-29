<template>
    <form @submit.prevent>
        <i>∟ Conditional outcome {{ index + 1}}</i>
        <button @click="collapsed = !collapsed">
            <span v-show="collapsed">Expand ↓</span>
            <span v-show="!collapsed">Collapse →</span>
        </button>

        <fieldset v-if="!collapsed"
        class="content">
            <span>Leads to: <strong style="color:rgb(138, 156, 255)">{{ outcomeEvent }}</strong></span>
            <button v-if="editorSelected.meta.type == 'event'"
            @click="outcome.leadsTo = editorSelected.meta">
                Assign selected event
            </button>
            <span v-else class="button-placeholder">
                Select an event to assign as the outcome.
            </span>
            <button v-if="outcome.leadsTo.name"
            @click="outcome.leadsTo = {}">Cancel</button>

            <br>CONDITIONS
            <condition-manager :conditions="outcome.conditions"
            :uniqueKey="`option ${optionIndex} conditional outcome ${index}`"/>

            <br>EFFECTS
            <effect-manager :effects="outcome.effects"
            :uniqueKey="`option ${optionIndex} conditional outcome ${index}`"/>

        </fieldset>
    </form>
</template>

<script>
import EffectManager from '@/components/Editor/ItemEditor/EffectManager.vue'
import ConditionManager from '@/components/Editor/ItemEditor/ConditionManager.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'OptionConditionalOutcomeEditor',
    props: ['outcome', 'optionIndex', 'index'],
    components: {
        EffectManager,
        ConditionManager
    },

    data() {
        return {
            collapsed: false
        }
    },

    computed: {
        ...mapGetters([
            'editorSelected'
        ]),

        outcomeEvent() {
            if (this.outcome.leadsTo.name) {
                const event = this.outcome.leadsTo
                let stringToReturn = `Event ${event.name} `
                if (event.upperChapter) {stringToReturn += `in Chapter ${event.upperChapter} `}
                if (event.upperScene) {stringToReturn += `in Scene ${event.upperScene} `}
                return stringToReturn
            } else {
                return 'No outcome event selected. '
            }
        }
    }
}
</script>

<style>

</style>
