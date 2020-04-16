<template>
    <ol id="EventOptions">
        <li :key="option.id"
        v-for="option in options">

            <button class="option"
            @click="handleOutcome(option.outcome)">
                {{ option.id }}. {{ option.text }}
            </button>

        </li>
    </ol>
</template>


<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: "Options",
    props: ["options"],
    computed: {
        ...mapState([
            'events',
            'flags'
        ])
        // Hide or grey out option (or other):
        // use Array.filter for options that don't meet requirements AND have disabledState == "hidden"
        //
    },


    methods: {
        ...mapMutations([
            'swapCurrentEvent',

            'increaseResource',
            'decreaseResource',

            'enableFlag',
            'disableFlag'
        ]),

        handleOutcome(outcome) {
            const newEvent = this.events[outcome.newEvent]
            this.swapCurrentEvent(newEvent)

            if (outcome.gain) {
                this.increaseResource(outcome.gain)
            }
            if (outcome.cost) {
                this.decreaseResource(outcome.cost)
            }

            if (outcome.flags) {
                if (outcome.flags.enable) {
                    this.enableFlag(outcome.flags.enable)
                }
                if (outcome.flags.disable) {
                    this.disableFlag(outcome.flags.disable)
                }
            }
        }
    }
}
</script>


<style scoped>
ol {
    list-style: none;
    padding-inline-start: 20px;
}
</style>


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
