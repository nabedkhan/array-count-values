function arrayCountValues(arr) {
  if (Array.isArray(arr)) {
    const result = {};
    const length = arr.length;

    for (let i = 0; i < length; i++) {
      if (result[arr[i]]) {
        result[arr[i]] += 1;
      } else {
        result[arr[i]] = 1;
      }
    }

    return result;
  } else {
    throw new TypeError("argument type must be an array");
  }
}

module.exports = arrayCountValues;
