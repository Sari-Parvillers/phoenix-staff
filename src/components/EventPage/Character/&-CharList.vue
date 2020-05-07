<template>
    <section id="CharList">
        <ul id="charlist-names">
            <li
            v-for="(item, index) in list"
            :key="index">
                {{ item.name }} <span>: {{ item.amount}}</span>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: "CharList",
    props: ['list']
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0.5rem;
    padding: 0;
}

li {
    display: grid;
    grid-template-columns: 65% 35%;
}

#CharList {
    justify-items: center;
}

#charlist-amounts {
    font-weight: bold
}
</style>
