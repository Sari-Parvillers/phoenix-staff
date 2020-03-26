export const template = {
    eventName: {
        title: 'Title of the event',

        text: [
            'paragraph1',

            'paragragh2'
        ],

        options: [{
            id: 1,
            text: "optionText",
            outcome: {
                newEvent: 'outcomeEventName',
                cost: {},
                gain: {}
            },
            // Todos below
            flags: {
                enable: {},
                disable: {}
            },
            conditions: {
                flags: {},
                attributes: {}
            }
        },

        {
            // Option without any optional keys
            id: 2,
            text: "optionText2",
            outcome: {
                newEvent: 'outcomeEventName2'
            }
        }]
    }
}
