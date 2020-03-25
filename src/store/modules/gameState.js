// This is all the data that needs to be saved for a save file
import attributes from "./character/attributes.js"
import inventory from "./character/inventory.js"
import resources from "./character/resources.js"
import status from "./character/status.js"
import traits from "./character/traits.js"

import events from "./events.js"

const state = {
    // currentEvent is the mutable property for the event at which the player is right now
    // The event below is the starting event.
    currentEvent: events.state.gameStart,

    // Important event flags that enable or disable or modify events and event options
    flags: {}
}


const getters = {
    currentEvent: function(state) {
        return state.currentEvent
    },

    currentEventParsedParagraphs: function(state) {
        // Returns an array of object with an ID from an array of strings
        let parsedParagraphs = []
        let index = 0
        state.currentEvent.text.forEach(paragraph => {
            parsedParagraphs[index] = {
                id: index,
                text: paragraph
            }
            index++
        })

        return parsedParagraphs
    }
}


const actions = {}


const mutations = {
    swapCurrentEvent(state, newEvent) {
        console.assert(typeof newEvent == 'object', 'swapCurrentEvent error, argument should be an object')

        state.currentEvent = newEvent
    }
}

const modules = {
    attributes,
    inventory,
    resources,
    status,
    traits
}

export default {
    state,
    getters,
    actions,
    mutations,
    modules
}
