<template>
    <aside id="Character">
        <Resources />
        <div id="ButtonContainer" class="Container">
            <Button id="InventoryButton"> Inventory </Button>
            <Button id="TraitsButton"> Traits </Button>
        </div>
    </aside>
</template>


<script>
import { mapState } from 'vuex'

import Resources from "./Character/ResourceList.vue"


export default {
    name: 'Character',
    components: {
        Resources
    },
    computed: {
        ...mapState([
            'gameState'
        ])
    }
}
// TODO: show attributes, inventory, status, traits
// TODO: show tooltips for attributes, inventory, status, traits
</script>


<style>
#Character {
    font-size: 1.25rem;
    border: 2px solid lightgrey
}

#ButtonContainer {
    display: flex;
    justify-content: center;
}

#ButtonContainer > button {
    margin: 0.5rem;
}

#Resources {
    list-style: none;
    margin: 0.5rem;
    padding: 0;
}

#Resources > li {
    margin-bottom: 0.5rem
}
</style>
