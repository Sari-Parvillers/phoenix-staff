<template>
    <main id="EventPage">
        <article id="event" class="grid-container">
            <Title :title="currentEvent.title" />

            <Paragraph
            v-for="paragraph in paragraphs"
            :key="paragraph.id"
            :paragraph="paragraph.text" />

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

import Character from './Character.vue'

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
           currentEvent: 'currentEvent',
           paragraphs: 'currentEventParsedParagraphs'
        })
    },


    methods: {}
}
</script>


<style>
.spacer {
    /* border-top: 2px solid grey; */
}

#EventPage {
    display: block;
    font-size: 120%;
    margin: 5% 5% 0 5%;
}
</style>
