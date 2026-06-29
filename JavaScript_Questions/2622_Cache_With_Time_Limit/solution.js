var TimeLimitedCache = function() {
    this.arr = [];
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    if (this.arr.find(obj => obj.key === key && Date.now() < obj.expiresAt) === undefined) {
        this.arr.push({ key, value, expiresAt: Date.now() + duration });
        return false;
    } else {
        const item = this.arr.find(obj => obj.key === key);
        item.value = value;
        item.expiresAt = Date.now() + duration;
        return true;
    }
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    let isexist = this.arr.find((obj) => {
        return obj.key === key && Date.now() < obj.expiresAt;
    });
    if (isexist === undefined) {
        return -1;
    }
    return isexist.value;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.arr.reduce((count, obj) => {
        return Date.now() < obj.expiresAt ? count + 1 : count;
    }, 0);
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
