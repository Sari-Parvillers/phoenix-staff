<template>
    <form class="manager"
    @submit.prevent>
        <p class="edit-option">
            <button @click="addConditionItem('flag')">
                Add flag conditions
            </button>

            <button @click="addConditionItem('value')">
                Add value conditions
            </button>

            <button @click="addConditionItem('OR')">
                Add operator
            </button>
        </p>

        <ul>
            <condition-item v-for="(condition, index) in conditions.items"
            :key="index"
            :index="index"
            :condition="condition"
            :uniqueKey="uniqueKey + index + '|'"
            @delete-condition="deleteCondition($event)" />
        </ul>
    </form>
</template>

<script>
import Vue from 'vue'

import ConditionItem from './ConditionManager/ConditionItem.vue'

export default {
    name: "ConditionManager",
    props: ['conditions', 'uniqueKey'],
    components: { ConditionItem },

    data() {
        return {}
    },


    methods: {
        isOperatorOrRoot(type) {
            if (
                type == 'OR' ||
                type == 'AND' ||
                type == 'NOR' ||
                type == 'NAND' ||
                type == 'root'
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
                level: levelOfNewItem
            }
            if (type == 'flag') {
                conditionItem.content = {
                    category: '',
                    flag: '',
                    trueIf: true
                }
            } else if (type == 'value') {
                conditionItem.content = {
                    category: '',
                    value: '',
                    comparator: 'equals',
                    comparand: {
                        type: 'number',
                        number: 0,
                        category: '',
                        value: ''
                    }
                }
            } else if (this.isOperatorOrRoot(type)) {
                conditionItem.items = []
            }
            Vue.set(this.conditions.items, indexOfNewItem, conditionItem)
        },

        deleteCondition(itemIndex) {
            this.conditions.items.splice(itemIndex, 1)
        }
    }
}
</script>

<style>

</style>

<style scoped>
form {
    border: 2px solid lightblue;
    padding: 2px;
}

ul {
    border-top: 1px solid lightblue;
    list-style: none;
    padding: 0;
    margin-left: 2%;
}

label {
    margin-right: 2px;
}
</style>
