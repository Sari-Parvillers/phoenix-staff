<template>
    <ul>
        I am condition manager beep boop <br>
        <span>
            <button @click="addConditionItem('flag')" v-show="!(conditions.flag)"> add flag conditions </button>
            <button @click="addConditionItem('value')" v-show="!(conditions.values)"> add value conditions </button>
            <button @click="addConditionItem('OR')"> add operator </button>
            <button @click="$emit('delete', conditions)" v-show="!(conditions.type == 'root')"> delete condition </button>
        </span>

        <li v-for="(condition, index) in conditions.items" :key="index">
            <span v-if="condition.type == 'flag'">
                <button> add flag </button>
                <span v-for="(item, index) in condition.items" :key="index">

                </span>
            </span>


            <span v-if="condition.type == 'value'"> values </span>


            <span v-if="isOperator(condition.type)">
                <br>
                ∟ Condition {{ conditions.items.indexOf(condition) }}
                <input checked type="radio" value="OR" id="OR"
                :name="`operator level${condition.level} index${index}`"
                v-model="conditions.items[index].type">
                <label for="OR">OR</label>

                <input type="radio" value="AND" id="AND"
                :name="`operator level${condition.level} index${index}`"
                v-model="conditions.items[index].type">
                <label for="AND">AND</label>

                <input type="radio" value="NOR" id="NOR"
                :name="`operator level${condition.level} index${index}`"
                v-model="conditions.items[index].type">
                <label for="NOR">NOR</label>

                <input type="radio" value="NAND" id="NAND"
                :name="`operator level${condition.level} index${index}`"
                v-model="conditions.items[index].type">
                <label for="NAND">NAND</label>
            </span>

            <condition-manager v-if="isOperator(condition.type)"
            :conditions="condition" @delete="deleteCondition(conditions.items.indexOf($event))" />
        </li>
    </ul>
</template>

<script>
import Vue from 'vue'

export default {
    name: "ConditionManager",
    props: ['conditions'],

    data() {
        return {}
    },


    methods: {
        isOperator(type) {
            if (
                type == 'OR' ||
                type == 'AND' ||
                type == 'NOR' ||
                type == 'NAND'
            ) {
                return true
            } else {
                return false
            }
        },

        addConditionItem(type) {
            const indexOfNewItem = this.conditions.items.length
            const levelOfNewItem = this.conditions.level + 1
            const conditionItem = {
                type: type,
                item: [],
                level: levelOfNewItem
            }
            Vue.set(this.conditions.items, indexOfNewItem, conditionItem)
        },

        deleteCondition(itemToDeleteIndex) {
            this.conditions.items.splice(itemToDeleteIndex, 1)
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: inherit;
}

label {
    margin-right: 2px;
}
</style>
