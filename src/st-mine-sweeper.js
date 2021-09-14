/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
    const newField = matrix.map(x => x.slice().fill(0));
    const isValid2 = curry(isValid)(matrix);
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === true) {
                newField[i][j] = 1;
                if (isValid2(i + 1, j)) newField[i + 1][j]++;
                if (isValid2(i - 1, j)) newField[i - 1][j]++;
                if (isValid2(i, j + 1)) newField[i][j + 1]++;
                if (isValid2(i, j - 1)) newField[i][j - 1]++;
                if (isValid2(i + 1, j + 1)) newField[i + 1][j + 1]++;
                if (isValid2(i - 1, j - 1)) newField[i - 1][j - 1]++;
                if (isValid2(i - 1, j + 1)) newField[i - 1][j + 1]++;
                if (isValid2(i + 1, j - 1)) newField[i + 1][j - 1]++;
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === true) {
                newField[i][j] = 1;
            }
        }
    }
    return newField;
}

function isValid (matrix, i, j) {
    let m = matrix.length;
    let n = matrix[0].length;
    return (0 <= i && i < m && 0 <= j && j < n);
}

function curry(f) {
    return function (a) {
        return function (b, c) {
            return f(a, b, c)
        }
    }
}