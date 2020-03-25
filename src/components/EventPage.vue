<template>
    <main id="EventBox">
        <div>
            <EventInformation />
            <EventText :paragraphs="paragraphs" />
            <EventOptions
            :options="currentEvent.options" />
        </div>
        <div class="spacer"></div>
        <Character></Character>
    </main>
</template>


<script>
// TODO: Google "media queries" and "responsive design"
import EventText from './EventPage/EventText.vue'
import EventInformation from './EventPage/Information.vue'
import Character from './EventPage/Character.vue'
import EventOptions from './EventPage/EventOptions.vue'

import { mapGetters } from 'vuex'


export default {
    name: "EventPage",


    components: {
        EventText,
        EventInformation,
        Character,
        EventOptions
    },


    computed: {
        ...mapGetters({
           currentEvent: 'currentEvent',
           paragraphs: 'currentEventParsedParagraphs'
        })
    },


    methods: {}
}
</script>


<style scoped>
.spacer {
    border-left: 2px solid grey;
}

#EventBox {
    display: grid;
    grid-template-columns: auto 1rem 12rem;
}
</style>
