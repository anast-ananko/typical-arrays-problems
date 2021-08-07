
exports.min = function min (array) {
  if (!array || !array.length) return 0;
  return array.reduce((acc, cur) => cur < acc ? cur : acc);
}

exports.max = function max (array) {
  if (!array || !array.length) return 0;
  return array.reduce((acc, cur) => cur > acc ? cur : acc);
}


exports.avg = function avg (array) {
  if (!array || !array.length) return 0;
  return array.reduce((acc, cur) => acc + cur) / array.length;
}
