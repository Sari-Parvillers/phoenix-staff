export default {
    objectToVueForArray: function(object) {
        const array = []
        let index = 0

        for (let property in object) {
            array[index] = {
                id: index,
                ...property
            }
            index++
        }
        return array
    }
}
