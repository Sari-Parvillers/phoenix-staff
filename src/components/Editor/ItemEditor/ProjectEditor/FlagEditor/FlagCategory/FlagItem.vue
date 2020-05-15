<template>
    <li>
        <span>{{ flag.name }}</span>

        <!-- Edit Flag button -->
        <button
        @click="editingFlag = !editingFlag; editingName = false" >
            <span v-show="editingFlag == false" >Edit <i>{{ flag.name }}</i></span>
            <span v-show="editingFlag == true" >Close <i>{{ flag.name }}</i> editing section</span>
        </button>

        <!-- Flag editing section -->
        <section v-if="editingFlag == true">
            <strong>Editing <i>{{ flag.name }}</i></strong>

            <button @click="editingName = !editingName">
                <span v-show="editingName == false">Edit name</span>
                <span v-show="editingName == true">Cancel name editing</span>
            </button>

            <input type="text"
            v-show="editingName == true"
            v-model="newFlagName">

            <button @click="editFlagName()"
            v-show="editingName == true">
                Confirm name change
            </button>

            <p>
                Starting value:
                <input type="radio" :value="false" id="false"
                :name="`category${category.name} flag${flag.name}`"
                v-model="flag.value">
                <label for="false">False</label>

                <input type="radio" :value="true" id="true"
                :name="`category${category.name} flag${flag.name}`"
                v-model="flag.value">
                <label for="true">True</label>
            </p>

            <p v-if="category.properties.visible == true">
                Description:
                <textarea name="" id="" cols="30" rows="10"
                v-model="flag.description"></textarea>
            </p>
        </section>
    </li>
</template>

<script>
import Vue from 'vue'

export default {
    name: 'FlagItem',
    props: ['flag', 'category'],

    data() {
        return {
            editingFlag: false,
            editingName: false,
            newFlagName: ''
        }
    },

    methods: {
        editFlagName() {
            const newName = this.newFlagName
            const oldName = this.flag.name
            if ( !(newName in this.category.flags) ) {
                this.flag.name = newName
                Vue.set(this.category.flags, newName, this.flag)
                Vue.delete(this.category.flags, oldName)
            } else {
                console.log(`${newName} is already the name of another flag in category ${this.category.name}`)
            }
        }
    }
}
</script>

<style>

</style>
