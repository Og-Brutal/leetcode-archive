/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let answers = new Map();
    return function(...args) {
        if (args.length == 2) {
            const key = `${args[0]},${args[1]}`;
            if (answers.has(key)) {
                return answers.get(key);
            } else {
                let res = fn(args[0], args[1]);
                answers.set(key, res);
                return res;
            }
        } else {
            const key = `${args[0]}`;
            if (answers.has(key)) {
                return answers.get(key);
            } else {
                let res = fn(args[0]);
                answers.set(key, res);
                return res;
            }
        }
    }
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
