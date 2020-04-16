const state = {
    fight: {
        name: "Fight",
        description: "",
        amount: 1
    },
    wits: {
        name: "Wits",
        description: "",
        amount: 2
    },
    endurance: {
        name: "Endurance",
        description: "",
        amount: 3
    },
    will: {
        name: "Will",
        description: "",
        amount: 4
    }
}


const getters = {
    attributes: (state) => {
        return state
    }
}

const mutations = {}

export default {
    state,
    getters,
    mutations
}
