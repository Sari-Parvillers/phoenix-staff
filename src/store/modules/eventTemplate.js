const state = {
    EventTemplate: class EventTemplate {
        constructor() {
            this.title = 'Title of the event',

            this.text = [
                {
                    paragraph: `Paragraph Text`,
                    conditions: {
                        type: 'root',
                        level: 0,
                        items: []
                        // Function checks if all flags or values in object fulfill condition, otherwise returns false
                        // flags: {
                            // This tells the condition function that this condition is a flag object
                            // type: 'flag'
                            // items: [
                                // {
                                // category: 'category name"
                                // name: 'flag name'
                                // value: true/false
                                // }
                            // ]
                        // }
                        // values: {
                            // type: 'value'
                            // items: {
                                // Function compares values of these categories with values of categories of the same name in database
                                // 'category name': {
                                    // 'value name' : {
                                        // num: /any number/
                                        // trueIf: 'less'|'more'|'equal'
                                    // }
                                // }
                            // }
                        // }
                        // Function recursively iterates over objects inside of operator object
                        // OR|AND|NOR|NAND: { /condition objects here/ }
                    }
                }
            ],

            this.options = [
                {
                    text: [
                        {
                            content: 'First option text',
                            conditions: {
                                type: 'root',
                                level: 0,
                                items: []
                            }
                        }
                    ],
                    outcome: {
                        default: {
                            leadsTo: '',
                            effects: []
                        },
                        conditionals: [
                            /*
                            {
                                leadsTo: '',
                                conditions: {},
                                effects: []
                            }
                            */
                        ]
                    }
                }
            ]
        }
    }
}

const getters = {
    EventTemplate(state) {
        return state.EventTemplate
    },

    paragraphTemplate(state) {
        const paragraphTemplate = new state.EventTemplate().text[0]

        return {...paragraphTemplate}
    }
}

export default {
    state,
    getters
}
