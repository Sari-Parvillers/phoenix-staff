<template>
    <form @submit.prevent>
        <strong>∟ Default outcome  </strong>
        <button @click="collapsed = !collapsed">
            <span v-show="collapsed">Expand ↓</span>
            <span v-show="!collapsed">Collapse →</span>
        </button>

        <fieldset v-if="!collapsed"
        class="content">
            <span>Leads to: <strong style="color:rgb(138, 156, 255)">{{ outcomeEvent }}</strong></span>
            <button v-if="editorSelected.meta.type == 'event'"
            @click="defaultOutcome.leadsTo = editorSelected.meta">
                Assign selected event
            </button>
            <span v-else class="button-placeholder">
                Select an event to assign as the outcome.
            </span>
            <button v-if="defaultOutcome.leadsTo.name"
            @click="defaultOutcome.leadsTo = {}">Cancel</button>

            <br>EFFECTS
            <effect-manager :effects="defaultOutcome.effects"
            :uniqueKey="`option ${optionIndex} default outcome effects`"/>

        </fieldset>
    </form>
</template>

<script>
import EffectManager from '@/components/Editor/ItemEditor/EffectManager.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'OptionDefaultOutcomeEditor',
    props: ['defaultOutcome', 'optionIndex'],
    components: {
        EffectManager
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
            if (this.defaultOutcome.leadsTo.name) {
                const event = this.defaultOutcome.leadsTo
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
