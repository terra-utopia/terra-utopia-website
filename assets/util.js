

/**
 * Modulo that supports positive and negative dividends, and shifts them all into the main interval [0; divisor)
 * @param {number} dividend any number
 * @param {number} divisor any positive number
 * @returns {number} the positive remainder, in the main interval [0; divisor)
 */
export function moduloUniversal(dividend, divisor) {
    if (divisor < 0) {
        throw new Error(`the 'divisor' argument has to be a positive number`);
    }
    return ((dividend % divisor) + divisor) % divisor;

    /* [example]:

        dividend = -12
        divisor = 5
        (dividend % divisor) = (-12 % 5) = -2
        ... + 5 = 3
        ... % divisor = 3
    */
    /* [example]:

        dividend = -10
        divisor = 5
        (dividend % divisor) = (-10 % 5) = 0
        ... + 5 = 5
        ... % divisor = 0
    */
}
