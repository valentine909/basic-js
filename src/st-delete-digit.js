/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
    const digits = "0123456789";
    for (let digit of digits) {
        const newN = String(n).replace(digit, "");
        if (newN.length !== String(n).length) return Number(newN);
    }
}
