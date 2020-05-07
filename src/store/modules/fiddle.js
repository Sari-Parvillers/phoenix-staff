function areConditionsFulfilled(condition) {
    if (condition.type == 'flag') {
        return condition.value == globalFlags[condition.id].value
    }

    for (const prop in condition) {
        if (prop == 'OR') {
            for (const prop in condition.OR) {
                if (areConditionsFulfilled(condition.OR[prop]) == true) {
                    return true
                }
            }
            return false

        } else if (prop == 'AND') {
            for (const prop in condition.AND) {
                if (areConditionsFulfilled(condition.AND[prop]) == false) {
                    return false
                }
            }
            return true

        } else if (prop == 'NOR') {
            for (const prop in condition.NOR) {
                if (areConditionsFulfilled(condition.NOR[prop]) == true) {
                    return false
                }
            }
            return true

        } else if (prop == 'NAND') {
            for (const prop in condition.NAND) {
                if (areConditionsFulfilled(condition.NAND[prop]) == false) {
                    return true
                }
            }
            return false
        }
    }
}
