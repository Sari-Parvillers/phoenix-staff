<template>
    <li class="manager-item condition-item">
        <flag-condition v-if="condition.type == 'flag'"
        :condition="condition"
        :uniqueKey="uniqueKey" />
        <operator-condition v-if="isOperator(condition.type)"
        :condition="condition"
        :uniqueKey="uniqueKey" />
        <value-condition v-if="condition.type == 'value'"
        :condition="condition"
        :uniqueKey="uniqueKey" />
    </li>
</template>

<script>
import FlagCondition from './ConditionItem/FlagCondition.vue'
import OperatorCondition from './ConditionItem/OperatorCondition.vue'
import ValueCondition from './ConditionItem/ValueCondition.vue'

export default {
    name: 'ConditionItem',
    props: ['condition', 'uniqueKey'],
    components: {
        FlagCondition,
        OperatorCondition,
        ValueCondition
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
        }
    }
}
</script>

<style>
.condition-item {
    border-bottom: 1px solid lightblue;
    margin-bottom: 1px;
}

</style>
