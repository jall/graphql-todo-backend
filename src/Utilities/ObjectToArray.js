/**
 * Equivalent to ES2017 Object.values function.
 *
 * @param {Object} obj
 *      An object to extract values from & put into array.
 * @return {Array}
 */
export default function objectToArray(obj) {
    return Object.keys(obj).map(key => obj[key]);
}
