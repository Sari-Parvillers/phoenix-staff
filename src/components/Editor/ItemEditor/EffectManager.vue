<template>
    <section class="manager">
        <p class="edit-option">
            <button @click="addFlagEffect()">Add flag effect</button>
            <button @click="addValueEffect()">Add value effect</button>
        </p>

        <ul>
            <effect-item v-for="(effect, index) in effects"
            :key="index"
            :effect="effect"
            :uniqueKey="uniqueKey + index"/>
        </ul>
    </section>
</template>

<script>
import Vue from 'vue'

import EffectItem from './EffectManager/EffectItem.vue'

export default {
    name: 'EffectManager',
    props: ['effects', 'uniqueKey'],
    components: {
        EffectItem
    },

    computed: {
        indexOfNewItem() {
            return this.effects.length
        }
    },

    methods: {
        addFlagEffect() {
            const flagEffect = {
                type: 'flag',
                content: {
                    category: '',
                    flag: '',
                    setTo: true
                }
            }
            Vue.set(this.effects, this.indexOfNewItem, flagEffect)
        },

        addValueEffect() {
            const valueEffect = {
                type: 'value',
                content: {
                    category: '',
                    value: '',
                    // add, substract, multiply, divide, set
                    operator: '',
                    operand: 0
                }
            }
            Vue.set(this.effects, this.indexOfNewItem, valueEffect)
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 2px;
    border: 1px solid lightblue;
}
</style>
