function sum(value) {
  let total = value;
  return function sumTotal(val) {
    if (val !== undefined) {
      total += val;
      return sumTotal;
    } else {
      return total;
    }
  };
}

if (require.main === module) {
  const sumFn = sum(1);
  sumFn(2);
  console.log(sumFn());
}

module.exports = { sum };
