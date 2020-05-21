<template>
    <li class="project-category-item">
        <span>{{ value.name }}  </span>

        <!-- Edit Value button -->
        <button
        @click="editingValue = !editingValue; editingName = false" >
            <span v-show="editingValue == false" >expand ↓</span>
            <span v-show="editingValue == true" >collapse →</span>
        </button>

        <!-- Value editing section -->
        <section class="project-category-item-editor"
        v-if="editingValue == true">
            <strong>Editing <i>{{ value.name }}</i></strong>

            <p class="edit-option category-section">
                <button @click="editingName = !editingName">
                    <span v-show="editingName == false">Edit name</span>
                    <span v-show="editingName == true">Cancel name editing</span>
                </button>

                <input type="text"
                v-show="editingName == true"
                v-model="newValueName">

                <button @click="editValueName()"
                v-show="editingName == true">
                    Confirm name change
                </button>
            </p>


            <p class="edit-option category-section">
                Starting value:
                <input type="number"
                v-model="valueNumString">
            </p>

            <p class="edit-option category-section">
                Description:
                <textarea name="" id="" cols="30" rows="3"
                v-model="value.description" />
            </p>

            <p class="edit-option category-section">
                Effects
            </p>

            <p class="edit-option category-section">
                Number options:
                <ul>
                    <li>
                        Lower threshold
                        <button class="toggleButton"
                        v-show="value.lowerThreshold == 'none'"
                        @click="value.lowerThreshold = Number(lowerThresholdString)">
                            Enable
                        </button>

                        <button class="toggleButton"
                        v-show="value.lowerThreshold != 'none'"
                        @click="value.lowerThreshold = 'none'">
                            Disable
                        </button>

                        <span v-show="value.lowerThreshold != 'none'">
                            Value:
                            <input class="thresholdInput"
                            type="number"
                            v-model="lowerThresholdString">
                        </span>
                    </li>

                    <li>
                        Upper threshold
                        <button class="toggleButton"
                        v-show="value.upperThreshold == 'none'"
                        @click="value.upperThreshold = Number(upperThresholdString)">
                            Enable
                        </button>

                        <button class="toggleButton"
                        v-show="value.upperThreshold != 'none'"
                        @click="value.upperThreshold = 'none'">
                            Disable
                        </button>

                        <span v-show="value.upperThreshold != 'none'">
                            Value:
                            <input class="thresholdInput"
                            type="number"
                            v-model="upperThresholdString">
                        </span>
                    </li>

                    <li>
                        Number of decimals:
                        <input type="number"
                        v-model="decimalsString">
                    </li>
                </ul>
            </p>


        </section>
    </li>
</template>

<script>
import Vue from 'vue'

export default {
    name: 'ValueItem',
    props: ['value', 'category'],

    data() {
        return {
            editingValue: false,
            editingName: false,
            newValueName: '',

            valueNumString: '0',
            lowerThresholdString: '0',
            upperThresholdString: '0',
            decimalsString: '0'
        }
    },

    watch: {
        valueNumString: function() {
            this.value.value = Number(this.valueNumString)
        },

        lowerThresholdString: function() {
            this.value.lowerThreshold = Number(this.lowerThresholdString)
        },

        upperThresholdString: function() {
            this.value.upperThreshold = Number(this.upperThresholdString)
        },

        decimalsString: function() {
            const numOfDecimals = Number(this.decimalsString)
            const maxDecimals = 10
            if (numOfDecimals >= 0 && numOfDecimals <= maxDecimals && Number.isInteger(numOfDecimals)) {
                this.value.decimals = numOfDecimals
            } else {
                this.value.decimals = 0
            }
        }
    },

    methods: {
        editValueName() {
            const newName = this.newValueName
            const oldName = this.value.name
            if ( !(newName in this.category.values) ) {
                this.value.name = newName
                Vue.set(this.category.values, newName, this.value)
                Vue.delete(this.category.values, oldName)
            } else {
                console.log(`${newName} is already the name of another value in category ${this.category.name}`)
            }
        }
    }
}
</script>

<style>

</style>
