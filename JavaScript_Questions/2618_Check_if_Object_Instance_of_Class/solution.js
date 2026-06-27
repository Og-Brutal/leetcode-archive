/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if (obj == null || typeof classFunction !== 'function') {
        return false;
    }

    // Handle primitive values (e.g. 5, 'abc', true)
    if (typeof obj !== 'object' && typeof obj !== 'function') {
        try {
            return Object(obj) instanceof classFunction;
        } catch {
            return false;
        }
    }

    return obj instanceof classFunction;
};

checkIfInstanceOf(new Date(), Date); // true
