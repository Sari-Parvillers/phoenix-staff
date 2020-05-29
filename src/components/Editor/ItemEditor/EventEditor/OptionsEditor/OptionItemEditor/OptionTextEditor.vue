<template>
    <section>
        <strong id="option-text-title">∟ Option text </strong>
        <button @click="collapsed = !collapsed">
            <span v-show="collapsed">Expand ↓</span>
            <span v-show="!collapsed">Collapse →</span>
        </button>

        <div v-if="!collapsed"
        class="content">
            <option-text-item-editor v-for="(text, index) in texts"
            :key="index"
            :index="index"
            :optionIndex="optionIndex"
            :text="text"
            @delete-text="deleteText($event)" />

            <button @click="addNewText()">
                + Option text
            </button>
        </div>
    </section>
</template>

<script>
import OptionTextItemEditor from './OptionTextEditor/OptionTextItemEditor.vue'

export default {
    name: 'OptionTextEditor',
    props: ['texts', 'optionIndex'],
    components: {
        OptionTextItemEditor
    },

    data() {
        return {
            collapsed: false
        }
    },

    methods: {
        addNewText() {
            this.texts.push({
                conditions: {
                    items: [],
                    level: 0,
                    type: 'root'
                },
                content: 'New option text'
            })
        },

        deleteText(itemIndex) {
            this.texts.splice(itemIndex, 1)
        }
    }
}
</script>

<style scoped>
#option-text-editor-content {
    margin-left: 0.5rem;
    padding-left: 0.5rem;
    border-left: 1px grey solid
}
</style>
