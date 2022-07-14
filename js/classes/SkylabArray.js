class SkylabArray {
  constructor(...values) {
    let i = 0;
    do {
      this[i] = values[i];
      i += 1;
    } while (values[i] !== undefined);
  }
}

const arraySky = new SkylabArray(0);
console.log(arraySky);

module.exports = SkylabArray;
