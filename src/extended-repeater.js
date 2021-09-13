/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options ) {
    str = String(str);
    let repeatTimes = (options['repeatTimes'] === undefined) ? 1 : options['repeatTimes'];
    let separator = (options['separator'] === undefined) ? '+' : options['separator'];
    let addition = (options['addition'] === undefined) ? "" : String(options['addition']);
    let additionRepeatTimes = (options['additionRepeatTimes'] === undefined) ? 1 : options['additionRepeatTimes'];
    let additionSeparator = (options['additionSeparator'] === undefined) ? "|" : options['additionSeparator'];

    let addToken = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
    return new Array(repeatTimes).fill(str + addToken).join(separator);
}