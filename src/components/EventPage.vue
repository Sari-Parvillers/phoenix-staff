<template>
    <main id="EventPage">
        <article id="event" class="grid-container">
            <Title :title="currentEvent.title" />

            <Paragraph
            v-for="(paragraph, index) in currentEvent.text"
            :key="index"
            :paragraph="paragraph" />

            <Options :options="currentEvent.options" />
        </article>

        <div class="spacer" />

        <Character />
    </main>
</template>


<script>
// TODO: Google "media queries" and "responsive design"
import Title from './EventPage/Title.vue'
import Paragraph from './EventPage/Paragraph.vue'
import Options from './EventPage/Options.vue'

import Character from './EventPage/Character.vue'

import { mapGetters } from 'vuex'


export default {
    name: "EventPage",


    components: {
        Title,
        Paragraph,
        Character,
        Options
    },


    computed: {
        ...mapGetters({
           currentEvent: 'currentEvent'
        })
    },


    methods: {}
}
</script>


<style>
/* .spacer {
    border-top: 2px solid grey;
} */


#EventTitle {
    font-family: serif;
    font-size: 130%;
    font-weight: normal;
    font-style: italic;
}

#EventOptions {
    font-size: 120%;
}

#EventPage {
    display: block;
    font-size: 16px;
    /* margin: 5% 5% 0 5%; */
    margin: auto;
    letter-spacing: 0.5px;
    line-height: 1.4;
    max-width: 960px;
}
</style>
