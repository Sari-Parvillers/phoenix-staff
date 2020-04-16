const state = {
    testFlag: false,
    otherFlag: true
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
