<template>
    <section>
        <span>Starting Event</span>
        <button>Select an event</button>

        <section>
            <h3>Flags</h3>
            <ul>
                <li v-for="(category, index) in editedProject.flagCategories" :key="index">
                    <h4>{{ category.name }}</h4>

                    <button @click="editingCategories.push(category.name)"
                    v-show="editingCategories.indexOf(category.name) == -1">
                        Edit category {{ category.name }}
                    </button>

                    <button @click="editingCategories.splice(editingCategories.indexOf(category.name), 1)"
                    v-show="editingCategories.indexOf(category.name) != -1">
                        Close <i>{{ category.name }}</i> editing section
                    </button>

                    <button @click="creatingNewFlagInCategory = index"
                    v-show="creatingNewFlagInCategory != index">
                        Add new flag
                    </button>
                    <button @click="creatingNewFlagInCategory = null"
                    v-show="creatingNewFlagInCategory == index">
                        Cancel flag creation
                    </button>
                    <br>
                    <input type="text" v-show="creatingNewFlagInCategory == index"
                    v-model="flagName"
                    @keyup.enter="createNewFlagInCategory(category.name)">

                    <button @click="createNewFlagInCategory(category.name)"
                    v-show="creatingNewFlagInCategory == index">
                        Create new flag
                    </button>

                    <ul>
                        <li v-for="(flag, index) in category.flags" :key="index">
                            <span>{{ flag.name }}</span>
                            <button @click="editingFlags.push(category.name + index)"
                            v-show="editingFlags.indexOf(category.name + index) == -1">
                                Edit <i>{{ flag.name }}</i>
                            </button>

                            <button @click="editingFlags.splice(editingFlags.indexOf(category.name + index), 1)"
                            v-show="editingFlags.indexOf(category.name + index) != -1">
                                Close <i>{{ flag.name }}</i> editing section
                            </button>

                            <section v-if="editingFlags.indexOf(category.name + index) != -1">
                                <strong>Editing {{ flag.name }}</strong>

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
                            </section>
                        </li>
                    </ul>
                </li>
            </ul>

            <button @click="creatingFlagCategory = !creatingFlagCategory">
                <span v-show="!creatingFlagCategory">Add flag category</span>
                <span v-show="creatingFlagCategory">Cancel category creation</span>
            </button>
            <br>
            <span v-show="creatingFlagCategory">
                <input type="text" v-model="flagCategoryName" @keyup.enter="createNewFlagCategory()">
                <button @click="createNewFlagCategory()">Create flag category</button>
            </span>
        </section>

        <span>Values</span>
        <ul>List of categories
            <li>
                <ul>Category1
                    <li>Value1</li> °true °false
                    <li>Value2</li> °true °false
                    <button>Add value</button>
                </ul>
            </li>
        </ul>
        <button>Add category</button>
    </section>
</template>

<script>
import Vue from 'vue'

export default {
    name: 'ProjectEditor',
    props: [
        'editedProject'
    ],

    data() {
        return {
            creatingFlagCategory: false,
            flagCategoryName: '',
            editingCategories: [],

            creatingNewFlagInCategory: '',
            flagName: '',
            editingFlags: []
        }
    },

    methods: {
        createNewFlagCategory() {
            if (!(this.flagCategoryName in this.editedProject.flagCategories)) {
                const name = this.flagCategoryName
                const newFlagCategory = {
                    name: name,
                    properties: {
                        hidden: true,
                        usable: false
                    },
                    flags: {}
                }
                Vue.set(this.editedProject.flagCategories, name, newFlagCategory)
                this.creatingFlagCategory = false
            }
        },

        createNewFlagInCategory(category) {
            const name = this.flagName
            const newFlag = {
                name: name,
                value: false,
                description: "",
                effect: {}
            }
            Vue.set(this.editedProject.flagCategories[category].flags, name, newFlag)

        }
    }

}
</script>

<style>


</style>
