export const template = {
    eventName: {
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
            }
        },
        {
            // Without any optional keys
            id: 2,
            text: "optionText2",
            outcome: {
                newEvent: 'outcomeEventName2'
            }
        }]
    }
}
