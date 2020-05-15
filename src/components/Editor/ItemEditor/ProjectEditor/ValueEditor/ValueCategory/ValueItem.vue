<template>
    <li>
        <span>{{ value.name }}</span>

        <!-- Edit Value button -->
        <button
        @click="editingValue = !editingValue; editingName = false" >
            <span v-show="editingValue == false" >Edit <i>{{ value.name }}</i></span>
            <span v-show="editingValue == true" >Close <i>{{ value.name }}</i> editing section</span>
        </button>

        <!-- Value editing section -->
        <section v-if="editingValue == true">
            <strong>Editing <i>{{ value.name }}</i></strong>

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


            <ul>
                <li>
                    Starting value:
                    <input type="number"
                    v-model="value.value">
                </li>

                <li>
                    Description:
                    <textarea name="" id="" cols="30" rows="10"
                    v-model="value.description"></textarea>
                </li>

                <li>
                    Effect
                </li>

                <li>
                    Number options:
                    <ul>
                        <li>
                            Lower threshold
                            <button class="toggleButton"
                            v-show="value.lowerThreshold == 'none'"
                            @click="value.lowerThreshold = lowerThreshold">
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
                            @click="value.upperThreshold = upperThreshold">
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
                </li>

            </ul>
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
            lowerThresholdString: '0',
            upperThresholdString: '0',
            decimalsString: '0'
        }
    },

    computed: {
        lowerThreshold: function() {
            return Number(this.lowerThresholdString)
        },

        upperThreshold: function() {
            return Number(this.upperThresholdString)
        },

        numOfDecimals: function() {
            const num = Number(this.decimalsString)
            if (num >= 0 && num <= 10 && Number.isInteger(num)) {
                return num
            } else {
                return 0
            }
        }
    },

    watch: {
        lowerThreshold: function() {
            this.value.lowerThreshold = this.lowerThreshold
        },

        upperThreshold: function() {
            this.value.upperThreshold = this.upperThreshold
        },

        numOfDecimals: function() {
            this.value.decimals = this.numOfDecimals
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
