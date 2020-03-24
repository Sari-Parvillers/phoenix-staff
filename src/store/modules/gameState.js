// This is all the data that needs to be saved for a save file
import attributes from "./character/attributes.js"
import inventory from "./character/inventory.js"
import resources from "./character/resources.js"
import status from "./character/status.js"
import traits from "./character/traits.js"

const state = {
    // The event at which the player is right now
    currentEvent: {
        text: [
            `The Quest for the Phoenix Staff`,

            `This adventure will take place in the world of Lurnaxis. To play, click on the options below, or use arrow keys, or tab, or any of the number keys, to choose an option. You also have an inventory, sometimes you will be able to use an item you have at any time.`
        ],
        options: [{
            id: 1,
            text: 'Start',
            outcome: 'introduction1',
            cost: {
                stamina: 8
            }
        }]
    },

    // Character data
    attributes,
    inventory,
    resources,
    status,
    traits,

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

export default {
    state,
    getters,
    actions,
    mutations
}
