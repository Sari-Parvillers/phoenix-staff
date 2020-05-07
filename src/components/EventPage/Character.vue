<template>
    <aside id="Character">
        <section id="character-resources" class="character-container">
            <CharList :list="resources" />
        </section>

        <section id="character-attributes" class="character-container">
            <CharList :list="attributes" />
        </section>

        <Button id="InventoryButton"> Inventory </Button>
        <Button id="TraitsButton"> Traits </Button>

    </aside>
</template>


<script>
import { mapState, mapGetters } from 'vuex'

import CharList from "./Character/&-CharList.vue"


export default {
    name: 'Character',
    components: {
        CharList
    },
    computed: {
        ...mapState([
            'gameState'
        ]),
        ...mapGetters([
            'attributes',
            'resources',
            'test'
        ])
    }
}
// TODO: show attributes, inventory, status, traits
// TODO: show tooltips for attributes, inventory, status, traits
</script>

<style scoped>
aside {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
}

li {
    margin-bottom: 0.5rem;
}

button {
    margin: 0.5rem;
}
</style>

<style>
#Character {
        border: 2px solid lightgrey
}

#ButtonContainer {
    display: flex;
    justify-content: center;
}
</style>
