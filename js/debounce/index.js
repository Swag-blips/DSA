/**
 * @typedef {((...args: Array<unknown>) => void) & {
 *   cancel: () => void,
 *   flush: () => void,
 * }} DebouncedFunction
 */

/**
 * @param {Function} func
 * @param {number} [wait=0]
 * @return {DebouncedFunction}
 */
export default function debounce(func, wait) {
  let timerId = null;
  let latestArgs = null;
  let callBackExecuted = false;
  let context = null;
  let canceled = false;
  function returnedDebounced(...args) {
    clearTimeout(timerId);
    callBackExecuted = false;

    latestArgs = args;
    context = this;
    timerId = setTimeout(() => {
      func.apply(context, args);
      callBackExecuted = true;
    }, wait);
  }

  returnedDebounced.cancel = function () {
    canceled = true;
    clearTimeout(timerId);
  };

  returnedDebounced.flush = function () {
    if (callBackExecuted || canceled || !timerId) return;
    func.apply(context, latestArgs);
    clearTimeout(timerId);
  };

  return returnedDebounced;
}
