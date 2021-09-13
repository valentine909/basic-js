/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
    let commonCharacters = 0;
    while (s1.length > 0) {
        let s1LengthBefore = s1.length;
        let s2LengthBefore = s2.length;
        let pattern = new RegExp(s1[0], 'g');
        s1 = s1.replace(pattern, "");
        s2 = s2.replace(pattern, "");
        let s1LengthAfter = s1.length;
        let s2LengthAfter = s2.length;
        commonCharacters += Math.min(s1LengthBefore - s1LengthAfter, s2LengthBefore - s2LengthAfter);
    }
    return commonCharacters;
}