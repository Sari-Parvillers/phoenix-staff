<template>
    <li class="project-category-item">
        <span>{{ flag.name }}  </span>

        <!-- Edit Flag button -->
        <button @click="editingFlag = !editingFlag; editingName = false" >
            <span v-show="editingFlag == false" >expand ↓</span>
            <span v-show="editingFlag == true" >collapse →</span>
        </button>

        <!-- Flag editing section -->
        <section class="project-category-item-editor"
        v-if="editingFlag == true">
            <strong>Editing <i>{{ flag.name }}</i></strong>

            <p class="edit-option category-section">
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
            </p>

            <p class="edit-option category-section">
                Starting value:
                <input type="radio"
                id="false"
                :value="false"
                :name="`category${category.name} flag${flag.name}`"
                v-model="flag.value">
                <label for="false">False</label>

                <input type="radio" :value="true" id="true"
                :name="`category${category.name} flag${flag.name}`"
                v-model="flag.value">
                <label for="true">True</label>
            </p>

            <p class="edit-option category-section"
            v-if="category.properties.visible == true">
                Description:
                <textarea name="" id="" cols="30" rows="10"
                v-model="flag.description"></textarea>
            </p>

            <p class="edit-option category-section"
            v-if="category.properties.usable == true">
                <strong>Effect editor:</strong>
                <effect-manager :effects="this.flag.effects"
                :uniqueKey="`in flag category ${category.name}, flag ${flag.name}`"/>
            </p>
        </section>
    </li>
</template>

<script>
import Vue from 'vue'

import EffectManager from '../../../EffectManager.vue'

export default {
    name: 'FlagItem',
    props: ['flag', 'category'],
    components: {
        EffectManager
    },

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
