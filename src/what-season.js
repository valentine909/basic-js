import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  else if (!(date instanceof Date) || Object.keys(date).length > 0) throw Error('Invalid date!');
  let month = date.getMonth();
  if (month === 11 || month <= 1) return 'winter';
  else if (1 < month && month <= 4) return 'spring';
  else if (4 < month && month <= 7) return 'summer';
  else  return 'autumn';
}