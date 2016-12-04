// @flow

/**
 * Equivalent to ES2017 Object.values function.
 */
export default function objectToArray(obj: Object): Array<any> {
    return Object.keys(obj).map(key => obj[key]);
}
