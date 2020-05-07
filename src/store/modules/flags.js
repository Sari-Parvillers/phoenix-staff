const state = {
    // Flags are stored directly in here, they each simply have a 'category' property which is used to filter them through a getter when the
    // need arises to display them or search through them only through categories.
    'some flag': {
        // Boolean
        value: true,
        // Categories must first be created on the project level. Then, when creating a new flag, the category is assigned depending on which
        // was chosen in the editor (so it's not possible to assign a category that isn't registered to a flag)
        //'hidden' is the only default category. Other categories can be hidden as well, or they can be displayed.
        category: 'some category',
        // If the flag is not in a hidden category, then hovering over it will display the description in a box.
        // Like any text, it can be made to have portions of conditional text
        description: [
            {
                content: '',
                conditions: {}
            }
        ],
        // If the flag is in a 'usable' category, then clicking on it will have an effect
        effect: {
            flags: {},
            values: {}
        },
        // If the flag is in a 'usable' category, then it can be made to be usable only under certain conditions.
        conditions: {}
    }
}

const getters = {}

const mutations = {
    enableFlag(state, flagArray) {
        console.assert(Array.isArray(flagArray), 'enableFlag error, argument should be an array')

        flagArray.forEach(flag => {
            console.assert(typeof flag == 'string', 'enableFlag error, element in flagArray is not a string')
            console.assert(flag in state, `enableFlag error, ${flag} is undefined`)

            state[flag] = true
        })
    },

    disableFlag(state, flagArray) {
        console.assert(Array.isArray(flagArray), 'enableFlag error, argument should be an array')

        flagArray.forEach(flag => {
            console.assert(typeof flag == 'string', 'enableFlag error, element in flagArray is not a string')
            console.assert(flag in state, `enableFlag error, ${flag} is undefined`)

            state[flag] = false
        })
    }
}

export default {
    state,
    getters,
    mutations
}


// TODO: disable/enable flag logic
// TODO: flag condition for options logic
