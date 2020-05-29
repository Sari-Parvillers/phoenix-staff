<template>
    <form @submit.prevent>
        <i>∟ Text {{ index }}  </i>
        <button @click="collapsed = !collapsed">
            <span v-show="collapsed">Expand ↓</span>
            <span v-show="!collapsed">Collapse →</span>
        </button>

        <div class="content"
        v-if="!collapsed">
            <textarea
            :name="'option-text' + index"
            rows="3"
            v-model="text.content"
            style="width: 100%">
                Option text
            </textarea>

            <fieldset>
                <input type="checkbox"
                :id="'text-conditions' + index"
                v-model="hasConditions"
                :disabled="text.conditions.items.length > 0">
                <label :for="'text-conditions' + index">Text conditions</label>

                <button class="delete-text-button"
                style="float:right"
                @click="$emit('delete-text', index)">
                    Delete text
                </button>
            </fieldset>

            <condition-manager v-if="hasConditions"
            :conditions="text.conditions"
            :uniqueKey="`option ${optionIndex} text ${index}|`" />
        </div>
    </form>
</template>

<script>
import ConditionManager from '@/components/Editor/ItemEditor/ConditionManager.vue'

export default {
    name: 'OptionTextItemEditor',
    props: ['text', 'index', 'optionIndex'],
    components: {
        ConditionManager
    },

    data() {
        return {
            hasConditions: false,
            collapsed: false
        }
    },

    created: function() {
        if (this.text.conditions.items.length > 0) {
            this.hasConditions = true
        } else {
            this.hasConditions = false
        }
    }
}
</script>

<style scoped>
    form {
        border-top: 2px solid grey;
        margin-top: 2px;
        padding-top: 2px;
        margin-bottom: 2px;
        margin-top: 2px;
    }
</style>
