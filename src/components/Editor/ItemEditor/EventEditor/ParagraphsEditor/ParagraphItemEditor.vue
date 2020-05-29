<template>
    <form @submit.prevent>
        <strong>Paragraph {{ index }}</strong>

        <textarea
        :name="'paragraph-text' + index"
        rows="6"
        v-model="paragraph.paragraph"
        style="width: 100%">
            Paragraph text
        </textarea>

        <fieldset>
            <input type="checkbox"
            :id="'paragraph-conditions' + index"
            v-model="hasConditions"
            :disabled="paragraph.conditions.items.length > 0">
            <label :for="'paragraph-conditions' + index + '|'">Paragraph conditions</label>

            <button class="delete-paragraph-button"
            style="float:right"
            @click="$emit('delete-paragraph', index)">
                Delete paragraph
            </button>
        </fieldset>

        <condition-manager v-if="hasConditions"
        :conditions="paragraph.conditions"
        :uniqueKey="`paragraph${index}|`"/>
    </form>
</template>

<script>
import ConditionManager from '../../ConditionManager.vue'

export default {
    name: "ParagraphItemEditor",
    props: ['paragraph', 'index'],
    components: {
        ConditionManager
    },

    data() {
        return {
            hasConditions: false
        }
    },

    created: function() {
        if (this.paragraph.conditions.items.length > 0) {
            this.hasConditions = true
        } else {
            this.hasConditions = false
        }
    }
}
</script>

<style scoped>
form {
    border-bottom: 1px grey solid;
    padding-bottom: 4px;
    margin-bottom: 4px;
}

strong {
    margin-bottom: 2px
}
</style>
