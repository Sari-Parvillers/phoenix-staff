<template>
    <section>
        <i>Value condition:</i>
        <p class="edit-option">
            Category:
            <select :name="'value condition category select ' + uniqueKey"
            id="value-condition-category-select"
            v-model="condition.content.category">
                <option v-for="(valueCategory, index) in editorValues"
                :key="index"
                :value="valueCategory.name">
                    {{ valueCategory.name }}
                </option>
            </select>

            Value:
            <select v-if="condition.content.category"
            :name="'value condition value select ' + uniqueKey"
            id="value-condition-value-select"
            v-model="condition.content.value">
                <option v-for="(value, index) in editorValues[condition.content.category].values"
                :key="index"
                :value="value.name">
                    {{ value.name }}
                </option>
            </select>
            <span v-else
            class="button-placeholder">
                Select value category
            </span>
        </p>

        <p class="edit-option">
            Comparator:
            <span v-for="(comparator, index) in this.comparators"
            :key="index">
                <input type="radio"
                :id="comparator"
                :name="'value condition comparators' + uniqueKey"
                :value="comparator"
                v-model="condition.content.comparator">
                <label :for="comparator"
                class="capitalize">{{ comparator }}</label>
            </span>
        </p>

        <p class="edit-option">
            Comparand:
            <span>
                <input type="radio"
                id="number"
                :name="'value comparand choice ' + uniqueKey"
                value="number"
                v-model="condition.content.comparand.type">
                <label for="number">Number</label>

                <input type="radio"
                id="value"
                :name="'value comparand choice ' + uniqueKey"
                value="value"
                v-model="condition.content.comparand.type">
                <label for="value">Value</label>
            </span>
            <span v-if="condition.content.comparand.type == 'number'">
                <br>
                ∟ Number:
                <input type="number"
                v-model="comparandString">
            </span>

            <span v-if="condition.content.comparand.type == 'value'">
                <br>
                ∟ Category:
                <select :name="'value condition comparand category select ' + uniqueKey"
                id="value-condition-comparand-category-select"
                v-model="condition.content.comparand.category">
                    <option v-for="(valueCategory, index) in editorValues"
                    :key="index"
                    :value="valueCategory.name">
                        {{ valueCategory.name }}
                    </option>
                </select>

                Value:
                <select v-if="condition.content.comparand.category"
                :name="'value condition comparand value select ' + uniqueKey"
                id="value-condition-comparand-value-select"
                v-model="condition.content.comparand.value">
                    <option v-for="(value, index) in editorValues[condition.content.comparand.category].values"
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
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ValueCondition',
    props: ['condition', 'uniqueKey'],

    data() {
        return {
            comparators: ['equals', 'more than', 'less than'],
            comparandString: 0
        }
    },

    watch: {
        comparandString: function() {
            this.condition.content.comparand.number = Number(this.comparandString)
        }
    },

    computed: {
        ...mapGetters([
            'editorValues'
        ])
    }
}
</script>

<style>

</style>
