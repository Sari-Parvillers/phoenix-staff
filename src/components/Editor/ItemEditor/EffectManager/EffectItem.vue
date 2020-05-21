<template>
    <li class="manager-item effect-item">
        <flag-effect v-if="effect.type == 'flag'"
        :effect="effect"
        :uniqueKey="uniqueKey"/>
        <value-effect v-if="effect.type == 'value'"
        :effect="effect"
        :uniqueKey="uniqueKey"/>
    </li>
</template>

<script>
import FlagEffect from './EffectItem/FlagEffect.vue'
import ValueEffect from './EffectItem/ValueEffect.vue'

export default {
    name: 'EffectItem',
    props: ['effect', 'uniqueKey'],
    components: {
        FlagEffect,
        ValueEffect
    }
}
</script>

<style>
    .effect-item {
        border-bottom: 1px solid lightblue;
        margin-bottom: 1px;
    }
</style>
