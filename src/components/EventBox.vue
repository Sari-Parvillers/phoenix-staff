<template>
    <main id="EventBox">
        <div>
            <EventInformation />
            <EventText :paragraphs="currentEventParsedParagraphs" />
            <EventOptions
            :options="currentEvent.options"
            @handle-outcome="handleOutcome" />
        </div>
        <div class="spacer"></div>
        <Character></Character>
    </main>
</template>

<script>
import EventText from './EventBox/EventBox-EventText.vue'
import EventInformation from './EventBox/EventBox-Information.vue'
import Character from './EventBox/EventBox-Character.vue'
import EventOptions from './EventBox/EventBox-Options.vue'

import EventData from '../data/Events.js'

export default {
    name: "EventBox",
    components: {
        EventText,
        EventInformation,
        Character,
        EventOptions
    },
    data() {
        return {
            currentEvent: EventData.gameStart,
            events: EventData
        }
    },
    computed: {
        currentEventParsedParagraphs: function() {
            // Returns an array of object with an ID from an array of strings
            let parsedParagraphs = []
            let index = 0
            this.currentEvent.text.forEach(paragraph => {
                parsedParagraphs[index] = {
                    id: index,
                    text: paragraph
                }
                index++
            })

            return parsedParagraphs
        }
    },
    methods: {
        handleOutcome(outcome) {
            this.currentEvent = this.events[outcome]
        },
        write(text) {
            console.log(text)
        }
    }
}
</script>

<style scoped>
/*
#EventInformation {
  border: 2px solid grey;
  padding: 0px 5px 0px 5px;
  font-size: 1.25rem
}
*/

.spacer {
    border-left: 2px solid grey;
}

#EventBox {
    display: grid;
    grid-template-columns: auto 1rem 12rem;
}
</style>
