export const template = {
    eventName: {
        title: 'Title of the event',

        text: [
            {
                content: {},
                conditions: {}
            },
            // Each paragraph in an event can have conditions. If the condition property is empty, then it shows the paragraph no matter what.
            // Else, it checks if the conditions are fulfilled.
            {
                content: {},
                conditions: {
                    // The conditions can be stored in logical operator objects, returning true or false depending on the operation
                    OR: {
                        // Flags are boolean values stored globally or locally
                        flags: {
                            'first flag' : true
                        },

                        // Values are stored globally on a per project basis, they store numbers
                        values: {
                            // Multiple value types can be created, e.g. attributes, resources, etc.
                            valueType1: {
                                // The exact value in the value type that is being checked against, e.g. gold, stamina, etc.
                                value1: {
                                    // Checks if 'amount' is more than or less than the quantity currently stored
                                    amount: {},
                                    enabledIf: '' //'above' or 'below'
                                }
                            }
                        }
                    }
                }
            }
        ],

        options: [
            {
                text: [
                    {
                        content: {},
                        // Functions exactly like paragraphs
                        conditions: {}
                    }
                ],
                outcome: {
                    newEvent: {
                        // The option leads to the default event if there are no conditional outcomes that can be fulfilled.
                        default: {
                            // This contains the meta of the event it leads to
                            leadsTo: {},
                            // Modifications on the state
                            effects: {
                                // Sets flags to true or false
                                flags: {
                                    'some flag name' : 'enable' // 'enable' or 'disable'
                                },
                                values: {
                                    valueType1: {
                                        value1: {
                                            // Effectuates an operation on the value according to 'num' and 'operand'
                                            num: 5,
                                            operand: 'add' // 'add' 'sub' 'mult' 'div' 'divNoRemain'
                                        }
                                    }
                                }
                            }
                        },
                        // The option checks for each conditional event in the array, in order starting from 0. The first conditional to have
                        // its conditions fulfilled becomes the event it leads to.
                        conditional: [
                            {
                                leadsTo: {},
                                // Again, functions like conditions of text. Will really need a big helper function for handling conditions
                                conditions: {},
                                effects: {}
                            }
                        ]
                    },
                }
            },
            {
                // Option without any optional keys
                text: "optionText2",
                outcome: {
                    newEvent: 'outcomeEventName2'
                }
            }
        ]
    }
}
