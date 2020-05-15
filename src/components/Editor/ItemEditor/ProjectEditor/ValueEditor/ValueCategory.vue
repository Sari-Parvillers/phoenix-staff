<template>
<li>
        <h4>{{ category.name }}</h4>

        <!-- Edit Category -->
        <button
        @click="editingCategory = !editingCategory">
            <span v-show="editingCategory == false">Edit category {{ category.name }}</span>
            <span v-show="editingCategory == true" >Close <i>{{ category.name }}</i> editing section</span>
        </button>

        <!-- Create Value -->
        <button @click="creatingNewValue = !creatingNewValue">
            <span v-show="creatingNewValue == false">Add new value</span>
            <span v-show="creatingNewValue == true">Cancel value creation</span>
        </button>

        <!-- Input for name of new value -->
        <br>
        <input type="text"
        v-show="creatingNewValue == true"
        v-model="newValueName"
        @keyup.enter="createNewValue()">

        <!-- Confirm creation of new value -->
        <button
        v-show="creatingNewValue == true"
        @click="createNewValue()">
            Create new value
        </button>

        <value-category-editor
        v-if="editingCategory == true"
        :valueCategories="valueCategories"
        :category="category"/>

        <ul>
            <value-item
            v-for="(value, index) in category.values"
            :key="index"
            :category="category"
            :value="value" />
        </ul>
    </li>
</template>

<script>
import ValueCategoryEditor from './ValueCategory/ValueCategoryEditor.vue'
import ValueItem from './ValueCategory/ValueItem.vue'

import Vue from 'vue'

export default {
    name: 'ValueCategory',
    props: ['category', 'valueCategories'],
    components: {
        ValueCategoryEditor,
        ValueItem
    },

    data() {
        return {
            editingCategory: false,

            creatingNewValue: false,
            newValueName: ''
        }
    },

    methods: {
        createNewValue() {
            const name = this.newValueName
            if ( !(name in this.category) ) {
                const newValue = {
                    name: name,
                    value: 0,
                    description: '',
                    effect: {},
                    lowerThreshold: 'none',
                    upperThreshold: 'none',
                    decimals: 0
                }
                Vue.set(this.category, name, newValue)
                this.creatingNewValue = false
                this.newValueName = ''
            } else {
                console.log(`Value ${name} already exists in category ${this.category.name}`)
            }
        }
    }
}
</script>

<style>

</style>
