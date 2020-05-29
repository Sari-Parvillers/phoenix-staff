<template>
    <form @submit.prevent>
        <i>Option {{ index }} </i>
        <button @click="collapsed = !collapsed">
            <span v-show="collapsed">Expand ↓</span>
            <span v-show="!collapsed">Collapse →</span>
        </button>
        <div v-if="!collapsed">
            <option-text-editor :texts="option.text"
            :optionIndex="index" />
            <option-outcome-editor :outcome="option.outcome"
            :optionIndex="index" />
        </div>
    </form>
</template>

<script>
import OptionTextEditor from './OptionItemEditor/OptionTextEditor.vue'
import OptionOutcomeEditor from './OptionItemEditor/OptionOutcomeEditor.vue'

export default {
    name: 'OptionItemEditor',
    props: ['option', 'index'],
    components: {
        OptionTextEditor,
        OptionOutcomeEditor
    },

    data() {
        return {
            collapsed: false
        }
    }
}
</script>

<style scoped>
form {
    border-bottom: 3px solid grey;
    padding-bottom: 2px;
    margin-bottom: 2px;
}
</style>
