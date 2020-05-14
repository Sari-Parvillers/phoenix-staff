<template>
    <li>
        <h4>{{ category.name }}</h4>

        <!-- Edit Category -->
        <button
        @click="editingCategory = !editingCategory">
            <span v-show="editingCategory == false">Edit category {{ category.name }}</span>
            <span v-show="editingCategory == true" >Close <i>{{ category.name }}</i> editing section</span>
        </button>

        <!-- Create Flag -->
        <button @click="creatingNewFlag = !creatingNewFlag">
            <span v-show="creatingNewFlag == false">Add new flag</span>
            <span v-show="creatingNewFlag == true">Cancel flag creation</span>
        </button>

        <!-- Input for name of new flag -->
        <br>
        <input type="text"
        v-show="creatingNewFlag == true"
        v-model="newFlagName"
        @keyup.enter="createNewFlag()">

        <!-- Confirm creation of new flag -->
        <button
        v-show="creatingNewFlag == true"
        @click="createNewFlag()">
            Create new flag
        </button>

        <flag-category-editor
        v-if="editingCategory == true"
        :flagCategories="flagCategories"
        :category="category"/>

        <ul>
            <flag-item
            v-for="(flag, index) in category.flags"
            :key="index"
            :category="category"
            :flag="flag" />
        </ul>
    </li>
</template>

<script>
import Vue from 'vue'

import FlagCategoryEditor from './FlagCategory/FlagCategoryEditor.vue'
import FlagItem from './FlagCategory/FlagItem.vue'

export default {
    name: 'FlagCategory',
    props: ['category', 'flagCategories'],
    components: {
        FlagCategoryEditor,
        FlagItem
    },

    data() {
        return {
            editingCategory: false,
            creatingNewFlag: false,
            newFlagName: ''
        }
    },

    methods: {
        createNewFlag() {
            if ( !(this.newFlagName in this.category.flags) ) {
                const newFlag = {
                    name: this.newFlagName,
                    value: false,
                    description: "",
                    effect: {}
                }
                Vue.set(this.category.flags, this.newFlagName, newFlag)
                this.creatingNewFlag = false
            } else {
                console.log(`Flag ${this.newFlagName} already exists in category ${this.category.name}`)
            }
        }
    }
}
</script>

<style>

</style>
