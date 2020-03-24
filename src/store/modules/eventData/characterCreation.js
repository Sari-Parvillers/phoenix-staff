export default {
    gameStart: {
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

    introduction1: {
        text: [
            `In the City of Lurn, the great Archmage Novina has recently made important discoveries. The city used to be blessed by Phoenixes, and contained what she has come to call the “Phoenix Staff”.`,

            `The City of Lurn was once the center of not just the continent, but the world. It was a shining beacon of hope, said to change people for the better just by entering its vicinity. It is still a major city, but nowhere near as radiant as it once was. Lurn’s glorious past is now the stuff of legends, thought to be the exaggerated historical accountings of an ancient city.`,
        ],
        options: [{
            id: 1,
            text: 'Continue',
            outcome: 'introduction2'
        }]
    }
}
