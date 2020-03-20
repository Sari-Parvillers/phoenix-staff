<template>
    <aside id="Character">
        <section>
            <ul id="CharacterStats">
                <li id="stamina">Stamina</li>
                <li>Gold</li>
                <li>Food</li>
            </ul>
            <div id="ButtonContainer" class="Container">
                <Button id="InventoryButton"> Inventory </Button>
            </div>
        </section>
    </aside>
</template>

<script>
export default {
    name: 'Character'
}
</script>

<style>
#Character {
    font-size: 1.25rem;
}

#Character > section {
    border: 2px solid lightgrey;
}

#ButtonContainer {
    display: flex;
    justify-content: center;
}

#InventoryButton {
    margin: 0.5rem;
}

#CharacterStats {
    list-style: none;
    margin: 0.5rem;
    padding: 0;
}

#CharacterStats > li {
    margin-bottom: 0.5rem
}
</style>
