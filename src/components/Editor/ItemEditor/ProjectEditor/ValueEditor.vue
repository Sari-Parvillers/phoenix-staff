<template>
    <section>
        <h2>Values</h2>

        <span class="category-list-info"><i>List of value categories</i></span>
        <ul class="category-list">
            <value-categories
            v-for="(category, index) in valueCategories"
            :key="index"
            :valueCategories="valueCategories"
            :category="category"/>
        </ul>

        <button @click="creatingCategory = !creatingCategory">
            <span v-show="creatingCategory == false">+ Add Value category</span>
            <span v-show="creatingCategory == true">Cancel category creation</span>
        </button>

        <br>
        <span v-show="creatingCategory == true">
            <input type="text"
            v-model="newCategoryName"
            @keyup.enter="createNewValueCategory()">

            <button @click="createNewValueCategory()">
                Create Category
            </button>
        </span>
    </section>
</template>

<script>
import ValueCategories from './ValueEditor/ValueCategory.vue'

import Vue from 'vue'

export default {
    name: 'ValueEditor',
    props: ['valueCategories'],
    components: {
        ValueCategories
    },

    data() {
        return {
            creatingCategory: false,
            newCategoryName: ''
        }
    },

    methods: {
        createNewValueCategory() {
            const name = this.newCategoryName
            if ( !(name in this.valueCategories) ) {
                const newValueCategory = {
                    name: name,
                    properties: {
                        visible: true,
                        usable: false
                    },
                    values: {}
                }
                Vue.set(this.valueCategories, name, newValueCategory)
                this.creatingCategory = false
                this.newCategoryName = ''
            } else {
                console.log(`${name} is already a Value category`)
            }
        }
    }
}
</script>

<style scoped>

</style>
