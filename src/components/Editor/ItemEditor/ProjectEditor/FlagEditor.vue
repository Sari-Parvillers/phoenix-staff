<template>
    <section>
        <h3>Flags</h3>
        <ul>
            <flag-category
            v-for="(category, index) in flagCategories"
            :key="index"
            :flagCategories="flagCategories"
            :category="category"/>
        </ul>

        <!-- Create Flag Category / Cancel Flag Category creation button -->
        <button @click="creatingFlagCategory = !creatingFlagCategory">
            <span v-show="!creatingFlagCategory">Add flag category</span>
            <span v-show="creatingFlagCategory">Cancel category creation</span>
        </button>

        <!-- Confirm Flag Category creation -->
        <br>
        <span v-show="creatingFlagCategory">
            <input type="text" v-model="newFlagCategoryName"
            @keyup.enter="createNewFlagCategory()">

            <button @click="createNewFlagCategory()">
                Create flag category
            </button>
        </span>
    </section>
</template>

<script>
import Vue from 'vue'

import FlagCategory from './FlagEditor/FlagCategory.vue'

export default {
    name: 'FlagEditor',
    props: ['flagCategories'],
    components: {
        FlagCategory
    },

    data() {
        return {
            creatingFlagCategory: false,
            newFlagCategoryName: ''
        }
    },

    methods: {
        createNewFlagCategory() {
            if ( !(this.newFlagCategoryName in this.flagCategories) ) {
                const newFlagCategory = {
                    name: this.newFlagCategoryName,
                    properties: {
                        hidden: true,
                        usable: false
                    },
                    flags: {}
                }
                Vue.set(this.flagCategories, this.newFlagCategoryName, newFlagCategory)
                this.creatingFlagCategory = false
            } else {
                console.log(`${this.newFlagCategoryName} already exists in flagCategories`)
            }
        }
    }
}
</script>

<style>

</style>
