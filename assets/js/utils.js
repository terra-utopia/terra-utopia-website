/**
 * This function enables a mapping from an arbitrary Integer 'a' into the interval from 0 to b.
 * Useful for index rotation.
 * @param {Int} a  Integer, the main number
 * @param {Number} b  Integer, the modulo number xD
 */
export function moduloWithNegative(a, b) {
    if (a >= 0) {
        return a % b;
    }
    else {
        return (-((-a) % b) + b) % b;       // the second '% b' in case that '-((-a) % b)' becomes 0, and '+ b' makes it become b, which should fall back to 0
    }
}