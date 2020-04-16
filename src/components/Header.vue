<template>
    <header id="Header">
        This here is the top bar
        <button
        @click="$emit('changePageToGame')"> Game </button>
        <button
        @click="$emit('changePageToEditor')"> Editor </button>
    </header>
</template>


<script>
export default {
    name: "Header"
}
</script>


<style scoped>

</style>
