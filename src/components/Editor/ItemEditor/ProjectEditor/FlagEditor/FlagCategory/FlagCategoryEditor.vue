<template>
    <section>
        <strong>Editing Category <i>{{ category.name }}</i></strong>

        <button @click="editingName = !editingName">
            <span v-show="editingName == false">Edit name</span>
            <span v-show="editingName == true">Cancel name editing</span>
        </button>

        <input type="text"
        v-show="editingName == true"
        v-model="newCategoryName"
        @keyup.enter="changeCategoryName()">

        <button
        v-show="editingName == true"
        @click="changeCategoryName()">
            Confirm name change
        </button>

        <p>
            Hidden:
            <input type="radio" :value="false" id="false"
            :name="`category${category.name} hidden-option`"
            v-model="category.properties.hidden">
            <label for="false">False</label>

            <input type="radio" :value="true" id="true"
            :name="`category${category.name} hidden-option`"
            v-model="category.properties.hidden">
            <label for="true">True</label>
        </p>

        <p>
            Usable:
            <input type="radio" :value="false" id="false"
            :name="`category${category.name} usable-option`"
            v-model="category.properties.usable">
            <label for="false">False</label>

            <input type="radio" :value="true" id="true"
            :name="`category${category.name} usable-option`"
            v-model="category.properties.usable">
            <label for="true">True</label>
        </p>
    </section>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default {
    name: 'FlagCategoryEditor',
    props: ['category', 'flagCategories'],

    data() {
        return {
            editingName: false,
            newCategoryName: ''
        }
    },

    computer: {
        ...mapGetters(['editorFlagCategories'])
    },

    methods: {
        changeCategoryName() {
            const newName = this.newCategoryName
            const oldName = this.category.name
            if ( !(newName in this.flagCategories) ) {
                this.category.name = newName
                Vue.set(this.flagCategories, newName, this.category)
                Vue.delete(this.flagCategories, oldName)
                this.editingName = false
                this.newCategoryName = ''
            } else {
                console.log(`${newName} is already a category name in flagCategories`)
            }
        }
    }
}
</script>

<style>

</style>
