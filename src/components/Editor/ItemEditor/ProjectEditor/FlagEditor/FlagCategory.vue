<template>
    <li class="project-category">
        <h4 class="project-category-title category-section">{{ category.name }}
            <button @click="collapsed = !collapsed">
                <span v-show="!collapsed">collapse →</span>
                <span v-show="collapsed">expand ↓</span>
            </button>
        </h4>

        <section v-show="!collapsed">
            <!-- Edit Category -->
            <p class="edit-option category-section">
                <span>Category properties  </span>

                <button
                @click="editingCategory = !editingCategory">
                    <span v-show="editingCategory == false">expand ↓</span>
                    <span v-show="editingCategory == true" >collapse →</span>
                </button>

                <flag-category-editor
                v-if="editingCategory == true"
                :flagCategories="flagCategories"
                :category="category"/>
            </p>

            <ul>
                <flag-item
                v-for="(flag, index) in category.flags"
                :key="index"
                :flag="flag"
                :category="category"
                :flagCategories="flagCategories"/>
            </ul>

            <!-- Create Flag -->
            <button @click="creatingNewFlag = !creatingNewFlag">
                <span v-show="creatingNewFlag == false">Add new flag</span>
                <span v-show="creatingNewFlag == true">Cancel flag creation</span>
            </button>

            <!-- Input for name of new flag -->
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
        </section>
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
            collapsed: false,

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
                    effects: []
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
