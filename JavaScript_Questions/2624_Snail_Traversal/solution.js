/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) { return []; }
    let matrix = new Array(rowsCount);
    for (let i = 0; i < rowsCount; i++) {
        matrix[i] = new Array(colsCount).fill(0);
    }
    let k = 0, direction = true;
    for (let i = 0; i < colsCount; i++) {
        for (let j = (direction ? 0 : rowsCount - 1); (direction ? j < rowsCount : j >= 0); (direction ? j++ : j--)) {
            matrix[j][i] = this[k];
            k++;
        }
        direction = (direction ? false : true);
    }
    return matrix;
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
