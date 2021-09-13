import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    let maxCountFromRecursion = 0;
    for (let elem of arr) {
      if (Array.isArray(elem)) {
        let countFromRecursion = this.calculateDepth(elem);
        if (countFromRecursion > maxCountFromRecursion) maxCountFromRecursion = countFromRecursion;
      }
    }
    return count + maxCountFromRecursion;
  }
}