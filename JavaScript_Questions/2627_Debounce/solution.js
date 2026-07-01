/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let isExist = false;
    let windowStamp = 0;
    let intID = 0;
    return function(...args) {
        if (!isExist) {
            isExist = true;
            windowStamp = Date.now() + t;
            intID = setTimeout(() => {
                fn(...args); 
                isExist = false;
            }, t);
        } else {
            if (Date.now() <= windowStamp) {
                isExist = true;
                windowStamp = Date.now() + t;
                clearTimeout(intID);
                intID = setTimeout(() => {
                    fn(...args); 
                    isExist = false;
                }, t);
            } else {
                return;
            }
        }
    }
};

//   const log = debounce(console.log, 100);
//   log('Hello'); // cancelled
//   log('Hello'); // cancelled
//   log('Hello'); // Logged at t=100ms
