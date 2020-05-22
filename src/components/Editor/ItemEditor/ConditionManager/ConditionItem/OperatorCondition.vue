<template>
    <section>
        <span>
            ∟ Operator Condition:
            <input checked type="radio"
            id="OR"
            :name="`operator level${condition.level} ` + uniqueKey"
            value="OR"
            v-model="condition.type">
            <label for="OR">OR</label>

            <input type="radio"
            id="AND"
            :name="`operator level${condition.level} ` + uniqueKey"
            value="AND"
            v-model="condition.type">
            <label for="AND">AND</label>

            <input type="radio"
            id="NOR"
            :name="`operator level${condition.level} ` + uniqueKey"
            value="NOR"
            v-model="condition.type">
            <label for="NOR">NOR</label>

            <input type="radio"
            id="NAND"
            :name="`operator level${condition.level} ` + uniqueKey"
            value="NAND"
            v-model="condition.type">
            <label for="NAND">NAND</label>
        </span>

        <condition-manager :conditions="condition"
        :uniqueKey="uniqueKey"/>
    </section>
</template>

<script>

export default {
    name: 'OperatorCondition',
    props: ['condition', 'uniqueKey'],
    components: {
        ConditionManager: () => import('../../ConditionManager.vue')
    }
}
</script>

<style>

</style>
