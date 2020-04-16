const state = {
    stamina: {
        name: "Stamina",
        description: "",
        amount: 15
    },
    gold: {
        name: "Gold",
        description: "",
        amount: 2
    },
    food: {
        name: "Food",
        description: "",
        amount: 3
    }
}


const getters = {
    resources: (state) => {
        return state
    }
}


const actions = {

}


const mutations = {
    increaseResource(state, gainPayload) {
        for (const resource in gainPayload) {
            console.assert(typeof gainPayload[resource] == "number", `increaseResource error, amount is not a number`)
            console.assert(gainPayload[resource] > 0, `increaseResource error, amount must be more than 0 (is ${gainPayload[resource]})`)
            console.assert(resource in state, `increaseResource error, "${resource}" is an undefined resource`)

            state[resource].amount += gainPayload[resource]
        }
    },

    decreaseResource(state, costPayload) {
        for (const resource in costPayload) {
            console.assert(typeof costPayload[resource] == "number", `decreaseResource error, amount is not a number`)
            console.assert(costPayload[resource] > 0, `decreaseResource error, amount must be more than 0 (is ${costPayload[resource]})`)
            console.assert(resource in state, `decreaseResource error, "${resource}" is an undefined resource`)

            state[resource].amount -= costPayload[resource]
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
