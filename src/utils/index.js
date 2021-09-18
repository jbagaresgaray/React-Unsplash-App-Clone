export const lazyFunction = (fn) => {
  return function () {
    return fn.apply(this, arguments);
  };
};
