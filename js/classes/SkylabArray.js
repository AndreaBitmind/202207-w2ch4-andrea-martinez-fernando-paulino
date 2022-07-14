class SkylabArray {
  constructor(...values) {
    let i = 0;
    do {
      this[i] = values[i];
      i += 1;
    } while (values[i] !== undefined);
  }
}

const arraySky = new SkylabArray(5, 6, "io", 9, 6, 7);
console.log(arraySky);

// module.exports = SkylabArray;
