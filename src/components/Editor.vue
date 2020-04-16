<template>
    <main>
        <section>
            <h1>This is the editor.</h1>

            <span>
                <button id="newEventButton"
                @click="toggleEventCreation()">
                    <span v-if="!creatingNewEvent">Create new event</span>
                    <span v-else>Cancel event creation</span>
                </button>
                <button>
                    Create new folder
                </button>
            </span>

            <span
            v-if="creatingNewEvent">
                Name of the Event
                <input
                v-model="newEventName"
                @keyup.enter="createNewEvent(newEventName)">
            </span>

            Event Title
            <input>

            Event text
            <textarea></textarea>

            <span><button> Save Event </button></span>
        </section>

        <Browser />
    </main>
</template>

<script>
// TODO: Divide the template into components rather than this ugly mess
// TODO: map the editor state and show it on the screen -> option to select and edit the editor state

import { mapState } from 'vuex'

import Browser from "./Editor/Browser.vue"

export default {
    name: 'Editor',
    components: {
        Browser
    },

    data() {
        return {
            creatingNewEvent: false,
            newEventName: '',
            currentEvent: {}
        }
    },

    computed: {
        ...mapState([
                'editorState'
        ])
    },

    methods: {
        toggleEventCreation() {
            this.creatingNewEvent = !this.creatingNewEvent
        },

        createNewEvent(name) {
            this.toggleEventCreation()
            this.currentEvent = {}
            this.currentEvent[name] = {}
        },

        saveEvent() {
            // mutate state in store to add/edit event
            return
        }
    }
}
</script>

<style scoped>
section {
    display: grid;
    grid-template-columns: 600px;
}

main {
    display: grid;
    grid-template-columns: 60% 40%;
}

* {
    margin: 10px
}
</style>
