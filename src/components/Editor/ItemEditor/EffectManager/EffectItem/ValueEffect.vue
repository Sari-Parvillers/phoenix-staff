<template>
    <section class="value-effect">
        <i>Value effect:</i>
        <p class="edit-option">
            <span>Category:
                <select :name="'category select ' + uniqueKey"
                id="category-select"
                v-model="effect.content.category">
                    <option v-for="(valueCategory, index) in editorValues"
                    :key="index"
                    :value="valueCategory.name">
                        {{ valueCategory.name }}
                    </option>
                </select>
            </span>

            <span>  Value:
                <select v-if="effect.content.category"
                :name="'value select ' + uniqueKey"
                id="value-select"
                v-model="effect.content.value">
                    <option v-for="(value, index) in editorValues[effect.content.category].values"
                    :key="index"
                    :value="value.name">
                        {{ value.name }}
                    </option>
                </select>
                <span v-else
                class="button-placeholder">
                    Select value category
                </span>
            </span>
        </p>

        <p class="edit-option">
            Operator:
            <span v-for="(operator, index) in this.operators"
            :key="index">
                <input type="radio"
                :id="operator"
                :name="'value effect ' + uniqueKey"
                :value="operator"
                v-model="effect.content.operator">
                <label :for="operator"
                class="capitalize">{{ operator }}</label>
            </span>
        </p>

        <p class="edit-option">
            Operand:
            <input type="number"
            v-model="operandString">
        </p>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ValueEffect',
    props: ['effect', 'uniqueKey'],

    data() {
        return {
            operators: ['add', 'sub', 'mult', 'div', 'set'],
            operandString: '0'
        }
    },

    computed: {
        ...mapGetters([
            'editorValues'
        ]),

        effectCategory() {
            return this.effect.content.category
        }
    },

    watch: {
        effectCategory: function() {
            this.effect.content.value = ''
        },

        operandString: function() {
            this.effect.content.operand = Number(this.operandString)
        }
    }
}
</script>

<style>

</style>
