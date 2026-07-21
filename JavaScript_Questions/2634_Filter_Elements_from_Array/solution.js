/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArr = [];
    if (fn.length == 1) {
        for (let n of arr) {
            if (fn(n)) {
                filteredArr.push(n);
            }
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i)) {
                filteredArr.push(arr[i]);
            }
        }
    }
    return filteredArr;
};
