<template>
    <div>
        <ol id="EventOptions">
            <li :key="option.id"
            v-for="option in options">

                <button class="option"
                @click="handleOutcome(option.outcome)">
                    {{ option.text }}
                </button>

            </li>
        </ol>
    </div>
</template>


<script>
import { mapState } from 'vuex'

export default {
    name: "EventOptions",
    props: ["options"],
    computed: {
        ...mapState({
            events: 'events'
        })
    },
    methods: {
        handleOutcome(outcome) {
            const newEvent = this.events[outcome]
            console.log("test")
            console.log(newEvent)
            this.$store.commit('swapCurrentEvent', newEvent)
        }
    }
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
