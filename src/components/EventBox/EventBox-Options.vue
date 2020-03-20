<template>
    <div>
        <ol id="EventOptions">
            <li :key="option.id"
            v-for="option in options">

                <button class="option"
                @click="$emit('handle-outcome', option.outcome)">
                    {{ option.text }}
                </button>

            </li>
        </ol>
    </div>
</template>

<script>
export default {
    name: "EventOptions",
    props: ["options"]
}
</script>

<style>
#EventOptions > li {
    color: lightskyblue;
}

.option {
    font: inherit;
    color: lightskyblue;

    text-align: inherit;
    text-indent: inherit;
    text-rendering: inherit;
    text-shadow: inherit;
    text-transform: inherit;

    letter-spacing: inherit;
    word-spacing: inherit;

    border: inherit;
    padding: inherit;
    margin: inherit;

    background: inherit;
    color: inherit;

    align-items: inherit;
    display: inherit;
    box-sizing: inherit;
}

.option:hover, .option:focus {
    outline: 0;
    cursor: pointer;
    color: rgb(138, 156, 255);
    text-decoration: underline;
}
</style>
